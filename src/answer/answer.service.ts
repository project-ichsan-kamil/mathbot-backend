import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Answer } from './entities/answer.entity';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private readonly answerRepository: Repository<Answer>,
  ) {}

  // Create new answer
  async create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    const newAnswer = this.answerRepository.create(createAnswerDto);
    return this.answerRepository.save(newAnswer);
  }

  async findAll(name?: string, kelas?: string): Promise<Answer[]> {
    const query = this.answerRepository.createQueryBuilder('answer');
    
    // Tambahkan kondisi untuk hanya mengambil data dengan statusData true
    query.where('answer.statusData = :status', { status: true });

    // Tambahkan filter untuk pencarian berdasarkan nama
    if (name) {
      query.andWhere('answer.nama LIKE :name', { name: `%${name}%` });
    }

    // Tambahkan filter untuk pencarian berdasarkan kelas
    if (kelas) {
      query.andWhere('answer.kelas = :kelas', { kelas });
    }

    return query.getMany();
  }

  async remove(id: number): Promise<void> {
    const answer = await this.answerRepository.findOne({ where: { id } });

    if (!answer) {
      // Jika data tidak ditemukan, lemparkan NotFoundException
      throw new NotFoundException(`Answer with ID ${id} not found`);
    }

    // Jika data ditemukan, ubah statusData menjadi false (soft delete)
    answer.statusData = false;
    await this.answerRepository.save(answer); // Simpan perubahan
  }
}
