import { environment } from './../../environments/environment.prod';
import { TokenService } from './../autenticacao/token.service';
import { Animais } from './animais';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {
  constructor(private http: HttpClient, private tokenService : TokenService) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais>{
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-accesss-token', token);
    return this.http.get<Animais>(`${API}/${nomeDoUsuario}/photos`,{
      headers:headers,
    });
  }
}
