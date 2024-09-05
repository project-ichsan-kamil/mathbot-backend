import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { SoalOption } from '../entities/answer.entity';

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsString()
  nama: string;

  @IsNotEmpty()
  @IsString()
  kelas: string;

  @IsEnum(SoalOption)
  soal1: SoalOption;

  @IsEnum(SoalOption)
  soal2: SoalOption;

  @IsEnum(SoalOption)
  soal3: SoalOption;

  @IsEnum(SoalOption)
  soal4: SoalOption;

  @IsEnum(SoalOption)
  soal5: SoalOption;

  @IsEnum(SoalOption)
  soal6: SoalOption;

  @IsEnum(SoalOption)
  soal7: SoalOption;

  @IsEnum(SoalOption)
  soal8: SoalOption;

  @IsEnum(SoalOption)
  soal9: SoalOption;

  @IsEnum(SoalOption)
  soal10: SoalOption;
}
