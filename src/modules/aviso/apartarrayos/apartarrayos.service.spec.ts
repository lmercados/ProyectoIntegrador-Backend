import { Test, TestingModule } from '@nestjs/testing';
import { ApartarrayosService} from './apartarrayos.service';

describe('SeccionadorService', () => {
  let service: ApartarrayosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApartarrayosService],
    }).compile();

    service = module.get<ApartarrayosService>(ApartarrayosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
