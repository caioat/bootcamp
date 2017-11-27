import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private usuario: string;
  private logTime: Date;
  // private serverURL: string = 'http://bootcamp.us-east-1.elasticbeanstalk.com/';
  private serverURL: string = 'http://172.24.30.24:3000/';
  public server: any;

  get nomeUsuario(): string {
    return this.usuario;
  }

  get loggedTime(): Date {
    return this.logTime;
  }

  constructor() {
    if (!sessionStorage.getItem('nome')) {
      this.usuario = prompt('Qual é o seu nome?');
    } else {
      this.usuario = sessionStorage.getItem('nome');
    }

    this.logTime = new Date();
    sessionStorage.setItem('nome', this.usuario);

    this.server = io(this.serverURL);
  }
}
