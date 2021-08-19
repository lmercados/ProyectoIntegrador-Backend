import { Test, TestingModule } from '@nestjs/testing';
import { AvisoTriController } from './aviso.tri.controller';
import { AvisoTriService } from './aviso.tri.service';

describe('AvisoTriController', () => {
  let controller: AvisoTriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvisoTriController],
      providers: [AvisoTriService],
    }).compile();

    controller = module.get<AvisoTriController>(AvisoTriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
