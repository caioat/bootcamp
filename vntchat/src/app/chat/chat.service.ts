import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private usuario: string;
  private logTime: Date;
  private serverURL: string = 'http://bootcamp.us-east-1.elasticbeanstalk.com/';
  //private serverURL: string = 'http://172.24.30.24:3000/';
  public server: any;
  public receivingFromServer: boolean = false;

  get nomeUsuario(): string {
    return this.usuario;
  }

  get loggedTime(): Date {
    return this.logTime;
  }

  constructor() {
    this.server = null;
  }

  public logIn(): void {
    if (!sessionStorage.getItem('nome')) {
      const promptReturn = prompt('Qual é o seu nome?');
      if (promptReturn != null && promptReturn.length > 0) {
        this.usuario = promptReturn;
        this.logTime = new Date();
        sessionStorage.setItem('nome', this.usuario);
      } else {
        return;
      }
    } else {
      this.usuario = sessionStorage.getItem('nome');
    }

    this.server = io(this.serverURL);
  }

  public logOut(): void {
    sessionStorage.removeItem('nome');
    this.usuario = null;
    this.logTime = null;

    this.server.close();
    this.server = null;
    this.receivingFromServer = false;
  }

}
