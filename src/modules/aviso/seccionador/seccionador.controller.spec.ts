import { Test, TestingModule } from '@nestjs/testing';
import { SeccionadorController } from './seccionador.controller';
import { SeccionadorService } from './seccionador.service';

describe('EfectoController', () => {
  let controller: SeccionadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeccionadorController],
      providers: [SeccionadorService],
    }).compile();

    controller = module.get<SeccionadorController>(SeccionadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
