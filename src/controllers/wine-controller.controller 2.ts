import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Wine} from '../models';
import {WineRepository} from '../repositories';

export class WineControllerController {
  constructor(
    @repository(WineRepository)
    public wineRepository : WineRepository,
  ) {}

  @post('/wines', {
    responses: {
      '200': {
        description: 'Wine model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wine)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wine, {
            title: 'NewWine',
            
          }),
        },
      },
    })
    wine: Wine,
  ): Promise<Wine> {
    return this.wineRepository.create(wine);
  }

  @get('/wines/count', {
    responses: {
      '200': {
        description: 'Wine model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Wine) where?: Where<Wine>,
  ): Promise<Count> {
    return this.wineRepository.count(where);
  }

  @get('/wines', {
    responses: {
      '200': {
        description: 'Array of Wine model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Wine, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Wine) filter?: Filter<Wine>,
  ): Promise<Wine[]> {
    return this.wineRepository.find(filter);
  }

  @patch('/wines', {
    responses: {
      '200': {
        description: 'Wine PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wine, {partial: true}),
        },
      },
    })
    wine: Wine,
    @param.where(Wine) where?: Where<Wine>,
  ): Promise<Count> {
    return this.wineRepository.updateAll(wine, where);
  }

  @get('/wines/{identifier}', {
    responses: {
      '200': {
        description: 'Wine model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Wine, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('identifier') identifier: string,
    @param.filter(Wine, {exclude: 'where'}) filter?: FilterExcludingWhere<Wine>
  ): Promise<Wine> {
    return this.wineRepository.findById(identifier, filter);
  }

  @patch('/wines/{identifier}', {
    responses: {
      '204': {
        description: 'Wine PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('identifier') identifier: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wine, {partial: true}),
        },
      },
    })
    wine: Wine,
  ): Promise<void> {
    await this.wineRepository.updateById(identifier, wine);
  }

  @put('/wines/{identifier}', {
    responses: {
      '204': {
        description: 'Wine PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('identifier') identifier: string,
    @requestBody() wine: Wine,
  ): Promise<void> {
    await this.wineRepository.replaceById(identifier, wine);
  }

  @del('/wines/{identifier}', {
    responses: {
      '204': {
        description: 'Wine DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('identifier') identifier: string): Promise<void> {
    await this.wineRepository.deleteById(identifier);
  }
}
