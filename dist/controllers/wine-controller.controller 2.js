"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let WineControllerController = class WineControllerController {
    constructor(wineRepository) {
        this.wineRepository = wineRepository;
    }
    async create(wine) {
        return this.wineRepository.create(wine);
    }
    async count(where) {
        return this.wineRepository.count(where);
    }
    async find(filter) {
        return this.wineRepository.find(filter);
    }
    async updateAll(wine, where) {
        return this.wineRepository.updateAll(wine, where);
    }
    async findById(identifier, filter) {
        return this.wineRepository.findById(identifier, filter);
    }
    async updateById(identifier, wine) {
        await this.wineRepository.updateById(identifier, wine);
    }
    async replaceById(identifier, wine) {
        await this.wineRepository.replaceById(identifier, wine);
    }
    async deleteById(identifier) {
        await this.wineRepository.deleteById(identifier);
    }
};
tslib_1.__decorate([
    rest_1.post('/wines', {
        responses: {
            '200': {
                description: 'Wine model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Wine) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Wine, {
                    title: 'NewWine',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Wine]),
    tslib_1.__metadata("design:returntype", Promise)
], WineControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/wines/count', {
        responses: {
            '200': {
                description: 'Wine model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Wine)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WineControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/wines', {
        responses: {
            '200': {
                description: 'Array of Wine model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Wine, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Wine)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WineControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/wines', {
        responses: {
            '200': {
                description: 'Wine PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Wine, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Wine)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Wine, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WineControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/wines/{identifier}', {
        responses: {
            '200': {
                description: 'Wine model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Wine, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('identifier')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Wine, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], WineControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/wines/{identifier}', {
        responses: {
            '204': {
                description: 'Wine PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('identifier')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Wine, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Wine]),
    tslib_1.__metadata("design:returntype", Promise)
], WineControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/wines/{identifier}', {
        responses: {
            '204': {
                description: 'Wine PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('identifier')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Wine]),
    tslib_1.__metadata("design:returntype", Promise)
], WineControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/wines/{identifier}', {
        responses: {
            '204': {
                description: 'Wine DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('identifier')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], WineControllerController.prototype, "deleteById", null);
WineControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.WineRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.WineRepository])
], WineControllerController);
exports.WineControllerController = WineControllerController;
//# sourceMappingURL=wine-controller.controller 2.js.map