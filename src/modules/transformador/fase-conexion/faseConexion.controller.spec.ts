import { Test, TestingModule } from '@nestjs/testing';
import { faseConexionController } from './faseConexion.controller';
import { faseConexionService } from './faseConexion.service';

describe('faseConexionController', () => {
  let controller: faseConexionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [faseConexionController],
      providers: [faseConexionService],
    }).compile();

    controller = module.get<faseConexionController>(faseConexionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
