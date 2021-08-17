import { Test, TestingModule } from '@nestjs/testing';
import { municipioLocalidadService} from './municipio.localidad.service';

describe('provinciaMunicipioService', () => {
  let service: municipioLocalidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [municipioLocalidadService],
    }).compile();

    service = module.get<municipioLocalidadService>(municipioLocalidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
