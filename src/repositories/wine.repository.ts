import {DefaultCrudRepository} from '@loopback/repository';
import {Wine, WineRelations} from '../models';
import {DatabaseDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WineRepository extends DefaultCrudRepository<
  Wine,
  typeof Wine.prototype.identifier,
  WineRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Wine, dataSource);
  }
}
