import { ProdutosService } from './produtos.service';
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
  constructor(private produtosService: ProdutosService) {
    //
  }

  @Get()
  index(): Produto[] {
    return this.produtosService.findAll();
  }

  @Get(':id')
  show(@Param() params): Produto {
    return this.produtosService.findOne(params.id);
  }

  @Post()
  store(@Body() produto: Produto): void {
    produto.id = 4;
    this.produtosService.create(produto);
  }

  @Put(':id')
  update(@Param() params, @Body() produto: Produto): Produto {
    return this.produtosService.update(params.id, produto);
  }

  @Delete(':id')
  @HttpCode(204)
  destroy(@Param() params): void {
    this.produtosService.delete(params.id);
  }
}
