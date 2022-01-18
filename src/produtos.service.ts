import { Injectable } from '@nestjs/common';
import { Produto } from './produto.model';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('LV0001', 'Livro show de bola', 45.99),
    new Produto('LV0002', 'Outro livro massa', 78.56),
    new Produto('LV0003', 'Livro top demais', 32.12),
  ];

  findAll(): Produto[] {
    return this.produtos;
  }

  findOne(id: number): Produto {
    return this.produtos[0];
  }

  create(produto: Produto): void {
    this.produtos.push(produto);
  }

  update(id: number, produto: Produto): Produto {
    return produto;
  }

  delete(id: number): void {
    this.produtos.pop();
  }
}
