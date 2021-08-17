import { Test, TestingModule } from '@nestjs/testing';
import { causaSubCausaController } from './causa.subcausa.controller';
import { causaSubCausaService } from './causa.subcausa.service';

describe('causaSubCausaController', () => {
  let controller: causaSubCausaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [causaSubCausaController],
      providers: [causaSubCausaService],
    }).compile();

    controller = module.get<causaSubCausaController>(causaSubCausaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
