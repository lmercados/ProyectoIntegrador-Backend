import { Test, TestingModule } from '@nestjs/testing';
import { estadoApoyoController } from './estado.apoyo.controller';
import { estadoApoyoService } from './estado.apoyo.service';

describe('ApoyoController', () => {
  let controller: estadoApoyoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [estadoApoyoController],
      providers: [estadoApoyoService],
    }).compile();

    controller = module.get<estadoApoyoController>(estadoApoyoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
