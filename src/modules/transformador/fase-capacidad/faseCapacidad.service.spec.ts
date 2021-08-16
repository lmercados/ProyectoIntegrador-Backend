import { Test, TestingModule } from '@nestjs/testing';
import { faseCapacidadService } from './faseCapacidad.service';

describe('faseCapacidadService', () => {
  let service: faseCapacidadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [faseCapacidadService],
    }).compile();

    service = module.get<faseCapacidadService>(faseCapacidadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
