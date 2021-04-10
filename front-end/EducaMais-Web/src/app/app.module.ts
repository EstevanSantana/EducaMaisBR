import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil } from 'ng-brazil'
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ListarPessoaComponent } from './cadastro-pessoa/listar-pessoa/listar-pessoa.component';
import { AdicionaPessoaComponent } from './cadastro-pessoa/adiciona-pessoa/adiciona-pessoa.component';

import { AppRoutingModule } from './app-routing.module';
import { DetalhePessoaComponent } from './cadastro-pessoa/detalhe-pessoa/detalhe-pessoa.component';
import { AlterarPessoaComponent } from './cadastro-pessoa/alterar-pessoa/alterar-pessoa.component';
import { DeletarPessoaComponent } from './cadastro-pessoa/deletar-pessoa/deletar-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ListarPessoaComponent,
    AdicionaPessoaComponent,
    DetalhePessoaComponent,
    AlterarPessoaComponent,
    DeletarPessoaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
