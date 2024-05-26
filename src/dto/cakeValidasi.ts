import { IsNotEmpty } from 'class-validator';

export class ValidasiCake {
  @IsNotEmpty({ message: 'Tidak Boleh kosong' })
  namaCake: string;
}
