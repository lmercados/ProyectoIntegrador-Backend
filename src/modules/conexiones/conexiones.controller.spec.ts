import { Test, TestingModule } from '@nestjs/testing';
import { ConexionController } from './conexiones.controller';
import { ConexionService } from './conexiones.service';

describe('ConexionController', () => {
  let controller: ConexionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConexionController],
      providers: [ConexionService],
    }).compile();

    controller = module.get<ConexionController>(ConexionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
