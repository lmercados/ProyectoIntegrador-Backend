import { Test, TestingModule } from '@nestjs/testing';
import { FasesController } from './fases.controller';
import { FasesService } from './fases.service';

describe('FasesController', () => {
  let controller: FasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FasesController],
      providers: [FasesService],
    }).compile();

    controller = module.get<FasesController>(FasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
