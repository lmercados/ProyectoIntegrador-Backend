import { Test, TestingModule } from '@nestjs/testing';
import { EfectoService} from './efecto.service';

describe('EfectoService', () => {
  let service: EfectoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EfectoService],
    }).compile();

    service = module.get<EfectoService>(EfectoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
