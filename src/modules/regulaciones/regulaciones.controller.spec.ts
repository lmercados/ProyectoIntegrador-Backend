import { Test, TestingModule } from '@nestjs/testing';
import { RegulacionController } from './regulaciones.controller';
import { RegulacionService } from './regulaciones.service';

describe('RegulacionController', () => {
  let controller: RegulacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegulacionController],
      providers: [RegulacionService],
    }).compile();

    controller = module.get<RegulacionController>(RegulacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
