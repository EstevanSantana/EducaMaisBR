import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-deletar-pessoa',
  templateUrl: './deletar-pessoa.component.html',
  styleUrls: ['./deletar-pessoa.component.css']
})
export class DeletarPessoaComponent implements OnInit {

  public id: number;
  public pessoa: Pessoa;

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pessoa = new Pessoa();

    this.id = this.route.snapshot.params['id'];
    
    this.pessoaService.obterPorId(this.id).subscribe(
      reponse => {
        this.pessoa = reponse;
      },
      error => console.log(error)
    )
  }

  public deletar(){
    this.pessoaService.deletar(this.id).subscribe(
      response => {
        console.log(response);
      },
      error => console.log(error)
    );
    this.router.navigate(['/home']);
  }

}
