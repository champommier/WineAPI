import { DefaultCrudRepository } from '@loopback/repository';
import { Wine, WineRelations } from '../models';
import { DatabaseDataSource } from '../datasources';
export declare class WineRepository extends DefaultCrudRepository<Wine, typeof Wine.prototype.identifier, WineRelations> {
    constructor(dataSource: DatabaseDataSource);
}
