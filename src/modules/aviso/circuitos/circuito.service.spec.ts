import { Test, TestingModule } from '@nestjs/testing';
import { CircuitoService} from './circuito.service';

describe('EfectoService', () => {
  let service: CircuitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CircuitoService],
    }).compile();

    service = module.get<CircuitoService>(CircuitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
