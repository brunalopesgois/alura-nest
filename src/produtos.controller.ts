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
import { Produto } from './produto.model';

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LV0001', 'Livro show de bola', 45.99),
    new Produto('LV0002', 'Outro livro massa', 78.56),
    new Produto('LV0003', 'Livro top demais', 32.12),
  ];

  @Get()
  index(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  show(@Param() params): Produto {
    return Produto[0];
  }

  @Post()
  store(@Body() produto: Produto): void {
    produto.id = 4;
    this.produtos.push(produto);
  }

  @Put(':id')
  update(@Param() params, @Body() produto: Produto): Produto {
    return produto;
  }

  @Delete(':id')
  @HttpCode(204)
  destroy(@Param() params): void {
    this.produtos.pop();
  }
}
