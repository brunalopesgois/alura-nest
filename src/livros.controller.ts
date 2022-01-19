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
  index(): Livro[] {
    return this.livrosService.findAll();
  }

  @Get(':id')
  show(@Param() params): Livro {
    return this.livrosService.findOne(params.id);
  }

  @Post()
  store(@Body() livro: Livro): void {
    livro.id = 4;
    this.livrosService.create(livro);
  }

  @Put(':id')
  update(@Param() params, @Body() livro: Livro): Livro {
    return this.livrosService.update(params.id, livro);
  }

  @Delete(':id')
  @HttpCode(204)
  destroy(@Param() params): void {
    this.livrosService.delete(params.id);
  }
}
