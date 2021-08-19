import { Test, TestingModule } from '@nestjs/testing';
import { causaSubCausaEstadoController } from './causa.subcausa.controller';
import { causaSubCausaEstadoService } from './causa.subcausa.estado.service';

describe('causaSubCausaController', () => {
  let controller: causaSubCausaEstadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [causaSubCausaEstadoController],
      providers: [causaSubCausaEstadoService],
    }).compile();

    controller = module.get<causaSubCausaEstadoController>(causaSubCausaEstadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
