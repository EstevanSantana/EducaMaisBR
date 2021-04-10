import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {

  constructor(private pessoaService: PessoaService, private router: Router) { }

  pessoas: Pessoa;

  ngOnInit(): void {
    this.listar();
  }

  public listar(): void {
    this.pessoaService.obter().subscribe(
      response => {
        this.pessoas = response;
        console.log(response)
      },
      error => console.log(error)
    );
  }

  detalhe(id: string){
    this.router.navigate(['/pessoa-detalhe/' + id]);
  }
}
