import { Test, TestingModule } from '@nestjs/testing';
import { PegawaiController } from './pegawai.controller';

describe('PegawaiController', () => {
  let controller: PegawaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PegawaiController],
    }).compile();

    controller = module.get<PegawaiController>(PegawaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
