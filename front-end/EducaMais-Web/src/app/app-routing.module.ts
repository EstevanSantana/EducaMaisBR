
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionaPessoaComponent } from './cadastro-pessoa/adiciona-pessoa/adiciona-pessoa.component';
import { AlterarPessoaComponent } from './cadastro-pessoa/alterar-pessoa/alterar-pessoa.component';
import { DeletarPessoaComponent } from './cadastro-pessoa/deletar-pessoa/deletar-pessoa.component';
import { DetalhePessoaComponent } from './cadastro-pessoa/detalhe-pessoa/detalhe-pessoa.component';
import { ListarPessoaComponent } from './cadastro-pessoa/listar-pessoa/listar-pessoa.component';
import { HomeComponent } from './navegacao/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'pessoa-cadastro', component: AdicionaPessoaComponent },
  { path: 'pessoa-detalhe/:id', component: DetalhePessoaComponent },
  { path: 'pessoa-alterar/:id', component: AlterarPessoaComponent },
  { path: 'pessoa-deletar/:id', component: DeletarPessoaComponent },
  { path: 'pessoa-listar', component: ListarPessoaComponent }  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }