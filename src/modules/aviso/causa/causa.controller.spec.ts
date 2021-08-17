import { Test, TestingModule } from '@nestjs/testing';
import { CausasController } from './causa.controller';
import { CausasService } from './causa.service';

describe('EstadosController', () => {
  let controller: CausasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CausasController],
      providers: [CausasService],
    }).compile();

    controller = module.get<CausasController>(CausasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
