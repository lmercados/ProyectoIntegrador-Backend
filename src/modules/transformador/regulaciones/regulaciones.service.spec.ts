import { Test, TestingModule } from '@nestjs/testing';
import { RegulacionService } from './regulaciones.service';

describe('RegulacionService', () => {
  let service: RegulacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegulacionService],
    }).compile();

    service = module.get<RegulacionService>(RegulacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
