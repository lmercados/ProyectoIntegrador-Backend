import { Test, TestingModule } from '@nestjs/testing';
import { TensionSecundariaController } from './tension.secundaria.controller';
import { TensionSecundariaService } from './tension.secundaria.service';

describe('TensionSecundariaController', () => {
  let controller: TensionSecundariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TensionSecundariaController],
      providers: [TensionSecundariaService],
    }).compile();

    controller = module.get<TensionSecundariaController>(
      TensionSecundariaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
