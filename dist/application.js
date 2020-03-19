"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
const datasources_1 = require("./datasources");
class WineapiLoopbackApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up mongo configuration
        const db_host = process.env.MONGO_HOST || 'localhost';
        const db_port = process.env.MONGO_PORT || 27017;
        const db_user = process.env.MONGO_USERNAME || '';
        const db_pass = process.env.MONGO_PASSWORD || '';
        const database = process.env.MONGO_DB || 'wines';
        this.bind('datasources.config.db').to({
            name: 'db',
            connector: 'mongodb',
            url: '',
            host: db_host,
            port: db_port,
            user: db_user,
            password: db_pass,
            database: database,
            useNewUrlParser: true,
        });
        this.bind('datasources.db').toClass(datasources_1.DatabaseDataSource);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
    }
}
exports.WineapiLoopbackApplication = WineapiLoopbackApplication;
//# sourceMappingURL=application.js.map