import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert } from 'typeorm';

export enum SoalOption {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

@Entity()
export class Answer {
  @PrimaryGeneratedColumn({ type : 'bigint'})
  id: number;

  @Column({ length: 100 })
  nama: string;

  @Column({ length: 50 })
  kelas: string;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal1: SoalOption;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal2: SoalOption;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal3: SoalOption;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal4: SoalOption;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal5: SoalOption;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal6: SoalOption;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal7: SoalOption;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal8: SoalOption;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal9: SoalOption;

  @Column({
    type: 'enum',
    enum: SoalOption,
    default: SoalOption.A,
  })
  soal10: SoalOption;

  @Column({ default: true })
  statusData: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  generateId() {
    this.id = Date.now(); // Generate ID based on current timestamp
  }

}
