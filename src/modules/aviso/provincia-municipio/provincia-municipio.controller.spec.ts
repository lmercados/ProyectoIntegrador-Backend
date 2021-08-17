import { Test, TestingModule } from '@nestjs/testing';
import { provinciaMunicipioController } from './provincia-municipio.controller';
import { provinciaMunicipioService } from './provincia-municipio.service';

describe('provinciaMunicipioController', () => {
  let controller: provinciaMunicipioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [provinciaMunicipioController],
      providers: [provinciaMunicipioService],
    }).compile();

    controller = module.get<provinciaMunicipioController>(provinciaMunicipioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
