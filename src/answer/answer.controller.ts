import { Controller, Get, Post, Body, Param, Delete, HttpStatus, HttpCode, Query } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Answer } from './entities/answer.entity';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)  // Set status code to 201
  async create(@Body() createAnswerDto: CreateAnswerDto): Promise<any> {
    const newAnswer = await this.answerService.create(createAnswerDto);
    
    // Mengembalikan pesan dan data
    return {
      statusCode : 201,
      message: 'Answer successfully created',
      data: newAnswer
    };
  }

  @Get()
  async findAll(
    @Query('nama') nama?: string,  
    @Query('kelas') kelas?: string
  ): Promise<any> {
    const result = await this.answerService.findAll(nama, kelas);
    return {
      statusCode : 200,
      message: `Get data successfully`,
      data : result
    };
  }

  @Delete()
  async remove(@Query('id') id: number): Promise<any> {
    await this.answerService.remove(id);
    
    return {
      statusCode : 200,
      message: `Answer deleted successfully`,
    };
  }
}
