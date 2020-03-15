import {Entity, model, property} from '@loopback/repository';

@model()
export class Wine extends Entity {
  @property({
    type: 'string',
    required: true,
    default: 'France',
  })
  country: string;

  @property({
    type: 'string',
    required: true,
  })
  area: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  identifier: string;


  constructor(data?: Partial<Wine>) {
    super(data);
  }
}

export interface WineRelations {
  // describe navigational properties here
}

export type WineWithRelations = Wine & WineRelations;
