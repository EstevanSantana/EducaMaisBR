import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgBrazilValidators } from 'ng-brazil';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-alterar-pessoa',
  templateUrl: './alterar-pessoa.component.html',
  styleUrls: ['./alterar-pessoa.component.css']
})
export class AlterarPessoaComponent implements OnInit {
  
  public id: number;
  public pessoa: Pessoa;
  public cadastroFormGrup: FormGroup;
  public formResult: string = '';

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router,  private formBulder: FormBuilder) { }

  ngOnInit(): void {
    this.pessoa = new Pessoa();
    this.id = this.route.snapshot.params['id'];
    
    this.pessoaService.obterPorId(this.id).subscribe(
      reponse => {
        this.pessoa = reponse;
      },
      error => console.log(error)
    )

    this.novoForm(this.pessoa = new Pessoa());

  }

  public novoForm(pessoa: Pessoa) {
    this.cadastroFormGrup = this.formBulder.group({
      nome: [pessoa.nome, [Validators.required]],
      dataNascimento: [pessoa.dataNascimento, [Validators.required]],
      telefone: [pessoa.telefone, [Validators.required]],
      email: [pessoa.email, [Validators.required, Validators.email]],
      cpf: [pessoa.cpf, [Validators.required, NgBrazilValidators.cpf]]
    });
  }

  public alterar() {
    console.log(this.cadastroFormGrup.value)
    if (this.cadastroFormGrup.dirty && this.cadastroFormGrup.valid) {
      this.pessoa = Object.assign({}, this.pessoa, this.cadastroFormGrup.value);
      this.formResult = JSON.stringify(this.cadastroFormGrup.value);

      this.pessoaService.alterar(this.id, this.pessoa).subscribe(
        response => {
          console.log(response);
        },
        error => console.log(error)
      );

      this.router.navigate(['/home']);
    }else {
      this.formResult = "Opa! erro";
    }
  }

}
