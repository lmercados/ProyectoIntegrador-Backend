import { Test, TestingModule } from '@nestjs/testing';
import { AvisoTrrController } from './aviso.trr.controller';
import { AvisoTrrService } from './aviso.trr.service';

describe('AvisoTrrController', () => {
  let controller: AvisoTrrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvisoTrrController],
      providers: [AvisoTrrService],
    }).compile();

    controller = module.get<AvisoTrrController>(AvisoTrrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
