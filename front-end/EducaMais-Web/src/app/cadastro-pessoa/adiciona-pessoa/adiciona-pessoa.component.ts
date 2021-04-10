import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgBrazilValidators } from 'ng-brazil';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-adiciona-pessoa',
  templateUrl: './adiciona-pessoa.component.html',
  styleUrls: ['./adiciona-pessoa.component.css']
})
export class AdicionaPessoaComponent implements OnInit {

  public pessoa: Pessoa;
  public cadastroFormGrup: FormGroup;
  public formResult: string = '';

  constructor(private pessoaService: PessoaService, private formBulder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.novoForm(new Pessoa());
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

  public add() {
    if (this.cadastroFormGrup.dirty && this.cadastroFormGrup.valid) {
      this.pessoa = Object.assign({}, this.pessoa, this.cadastroFormGrup.value);
      this.formResult = JSON.stringify(this.cadastroFormGrup.value);
      this.pessoaService.adicionar(this.pessoa).subscribe(
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
