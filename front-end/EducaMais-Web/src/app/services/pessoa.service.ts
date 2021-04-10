import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5000/api/Pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  obter(): Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  obterPorId(id): Observable<any> {
    return this.httpClient.get(`${baseUrl}/${id}`);
  }

  adicionar(value): Observable<any> {
    return this.httpClient.post(baseUrl, value);
  }

  alterar(id, value): Observable<any> {
    return this.httpClient.put(`${baseUrl}/${id}`, value);
  }

  deletar(id): Observable<any> {
    return this.httpClient.delete(`${baseUrl}/${id}`);
  }
}
