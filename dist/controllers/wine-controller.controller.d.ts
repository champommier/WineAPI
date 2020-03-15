import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Wine } from '../models';
import { WineRepository } from '../repositories';
export declare class WineControllerController {
    wineRepository: WineRepository;
    constructor(wineRepository: WineRepository);
    create(wine: Wine): Promise<Wine>;
    count(where?: Where<Wine>): Promise<Count>;
    find(filter?: Filter<Wine>): Promise<Wine[]>;
    updateAll(wine: Wine, where?: Where<Wine>): Promise<Count>;
    findById(identifier: string, filter?: FilterExcludingWhere<Wine>): Promise<Wine>;
    updateById(identifier: string, wine: Wine): Promise<void>;
    replaceById(identifier: string, wine: Wine): Promise<void>;
    deleteById(identifier: string): Promise<void>;
}
