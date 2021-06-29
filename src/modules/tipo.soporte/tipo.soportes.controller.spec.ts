import { Test, TestingModule } from '@nestjs/testing';
import { TipoSoporteController } from './tipo.soportes.controller';
import { TipoSoporteService } from './tipo.soportes.service';

describe('SoportesController', () => {
  let controller: TipoSoporteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoSoporteController],
      providers: [TipoSoporteController],
    }).compile();

    controller = module.get<TipoSoporteController>(TipoSoporteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
