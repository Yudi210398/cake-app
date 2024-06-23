import { Test, TestingModule } from '@nestjs/testing';
import { CakeController } from './cake.controller';
import { CakeService } from './cake.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaPostgresService } from 'src/prisma-postgres/prisma-postgres.service';

describe('CakeController', () => {
  let controller: CakeController;
  let service: CakeService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CakeController],
      providers: [
        CakeService,
        {
          provide: PrismaPostgresService,
          useValue: {
            cake: {
              findMany: jest.fn().mockResolvedValue([]),
              create: jest.fn().mockResolvedValue({}),
            },
          },
        },
        {
          provide: CloudinaryService,
          useValue: {
            uploadFile: jest
              .fn()
              .mockResolvedValue({ url: 'http://image.url' }),
          },
        },
      ],
    }).compile();

    controller = module.get<CakeController>(CakeController);
    service = module.get<CakeService>(CakeService);
  });

  it('datas', () => {
    expect(controller).toBeDefined();
  });

  it('cek prisma get data', async () => {
    jest.spyOn(service, 'getKue').mockResolvedValueOnce([]);
    const getData = await controller.getData();
    console.log(getData, `cakss`);
  });
});
