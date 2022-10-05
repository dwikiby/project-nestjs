import { Test, TestingModule } from '@nestjs/testing';
import { PegawaiService } from './pegawai.service';

describe('PegawaiService', () => {
  let service: PegawaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PegawaiService],
    }).compile();

    service = module.get<PegawaiService>(PegawaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
