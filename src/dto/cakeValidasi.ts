import { IsNotEmpty } from 'class-validator';

enum Category {
  kering = 'KUE_KERING',
  basah = 'KUE_BASAH',
}

export class ValidasiCake {
  @IsNotEmpty({ message: 'Tidak Boleh kosong nama' })
  namaCake: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong,' })
  quantity: number;

  @IsNotEmpty({ message: 'Tidak Boleh kosong' })
  price: number;

  @IsNotEmpty({ message: 'Tidak Boleh kosong description' })
  description: string;

  @IsNotEmpty({ message: 'Tidak Boleh kosong category' })
  category: Category;
}
