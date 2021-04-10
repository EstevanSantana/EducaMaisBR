import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-detalhe-pessoa',
  templateUrl: './detalhe-pessoa.component.html',
  styleUrls: ['./detalhe-pessoa.component.css']
})
export class DetalhePessoaComponent implements OnInit {

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

  public alterar(id: number){
    this.router.navigate(['/pessoa-alterar/' + id]);
  }

  public deletar(id: number){
    this.router.navigate(['/pessoa-deletar/' + id]);
  }
}
