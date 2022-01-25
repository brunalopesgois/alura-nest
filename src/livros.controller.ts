import { LivrosService } from './livros.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.model';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {
    //
  }

  @Get()
  async index(): Promise<Livro[]> {
    return this.livrosService.findAll();
  }

  @Get(':id')
  async show(@Param() params): Promise<Livro> {
    return this.livrosService.findOne(params.id);
  }

  @Post()
  async store(@Body() livro: Livro) {
    this.livrosService.create(livro);
  }

  @Put(':id')
  async update(
    @Param() params,
    @Body() livro: Livro,
  ): Promise<[number, Livro[]]> {
    return this.livrosService.update(params.id, livro);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param() params) {
    this.livrosService.delete(params.id);
  }
}
