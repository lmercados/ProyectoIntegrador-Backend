import { Test, TestingModule } from '@nestjs/testing';
import { municipioLocalidadController } from './municipio.localidad.controller';
import { municipioLocalidadService } from './municipio.localidad.service';

describe('provinciaMunicipioController', () => {
  let controller: municipioLocalidadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [municipioLocalidadController],
      providers: [municipioLocalidadService],
    }).compile();

    controller = module.get<municipioLocalidadController>(municipioLocalidadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
