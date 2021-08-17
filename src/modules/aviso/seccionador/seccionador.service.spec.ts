import { Test, TestingModule } from '@nestjs/testing';
import { SeccionadorService} from './seccionador.service';

describe('SeccionadorService', () => {
  let service: SeccionadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeccionadorService],
    }).compile();

    service = module.get<SeccionadorService>(SeccionadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
