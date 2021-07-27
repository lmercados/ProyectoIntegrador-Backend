import { Test, TestingModule } from '@nestjs/testing';
import { TensionPrimariaController } from './tension.primaria.controller';
import { TensionPrimariaService } from './tension.primaria.service';

describe('TensionPrimariaController', () => {
  let controller: TensionPrimariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TensionPrimariaController],
      providers: [TensionPrimariaService],
    }).compile();

    controller = module.get<TensionPrimariaController>(
      TensionPrimariaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
