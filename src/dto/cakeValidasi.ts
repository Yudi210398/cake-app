import { IsNotEmpty, IsNumber } from 'class-validator';

enum Category {
  kering = 'KUE_KERING',
  basah = 'KUE_BASAH',
}

export class ValidasiCake {
  @IsNotEmpty({ message: 'Tidak Boleh kosong' })
  namaCake: string;

  @IsNumber({}, { message: 'harus berupa angka' })
  @IsNotEmpty({ message: 'Tidak Boleh kosong' })
  quantity: number;

  @IsNotEmpty({ message: 'Tidak Boleh kosong' })
  image: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong' })
  description: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong' })
  category: Category;
}
