import { Test, TestingModule } from '@nestjs/testing';
import {causaSubCausaEstadoService} from './causa.subcausa.estado.service';

describe('causaSubCausaEstadoService', () => {
  let service: causaSubCausaEstadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [causaSubCausaEstadoService],
    }).compile();

    service = module.get<causaSubCausaEstadoService>(causaSubCausaEstadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
