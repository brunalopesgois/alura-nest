import { Injectable } from '@nestjs/common';
import { Livro } from './livro.model';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    new Livro('LV0001', 'Livro show de bola', 45.99),
    new Livro('LV0002', 'Outro livro massa', 78.56),
    new Livro('LV0003', 'Livro top demais', 32.12),
  ];

  findAll(): Livro[] {
    return this.livros;
  }

  findOne(id: number): Livro {
    return this.livros[0];
  }

  create(livro: Livro): void {
    this.livros.push(livro);
  }

  update(id: number, livro: Livro): Livro {
    return livro;
  }

  delete(id: number): void {
    this.livros.pop();
  }
}
