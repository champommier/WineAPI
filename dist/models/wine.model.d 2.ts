import { Entity } from '@loopback/repository';
export declare class Wine extends Entity {
    country: string;
    area: string;
    name: string;
    color: string;
    identifier: string;
    constructor(data?: Partial<Wine>);
}
export interface WineRelations {
}
export declare type WineWithRelations = Wine & WineRelations;
