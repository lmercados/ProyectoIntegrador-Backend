import { Test, TestingModule } from '@nestjs/testing';
import { tipoReparacionService } from './tipo.reparacion.service';

describe('tipoReparacionService', () => {
  let service: tipoReparacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [tipoReparacionService],
    }).compile();

    service = module.get<tipoReparacionService>(tipoReparacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
