import { Test, TestingModule } from '@nestjs/testing';
import { soporteTipoSoporteController } from './soporteTipoSoporte.controller';
import { soporteTipoSoporteService} from './soporteTipoSoporte.service';

describe('soporteTipoSoporteController', () => {
  let controller: soporteTipoSoporteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [soporteTipoSoporteController],
      providers: [soporteTipoSoporteService],
    }).compile();

    controller = module.get<soporteTipoSoporteController>(soporteTipoSoporteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
