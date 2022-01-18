import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  index(): string {
    return 'Obter lista de produtos';
  }

  @Get(':id')
  show(@Param() params): string {
    return `Devolve os dados do produto ${params.id}`;
  }

  @Post()
  store(@Body() produto): string {
    return 'Produto criado';
  }

  @Put(':id')
  update(@Param() params, @Body() produto): string {
    return 'Produto atualizado';
  }

  @Delete(':id')
  destroy(@Param() params): string {
    return 'Produto removido';
  }
}
