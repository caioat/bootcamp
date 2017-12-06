import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private user: string;
  private logTime: Date;
  private sessionStorageKeyName = 'name';
  private serverURL = 'http://bootcamp.us-east-1.elasticbeanstalk.com/';
  //private serverURL: string = 'http://172.24.30.24:3000/';
  public server: any;
  public connected = false;

  get username(): string {
    return this.user;
  }

  get loggedTime(): Date {
    return this.logTime;
  }

  constructor() {
    this.server = null;
  }

  public logIn(): void {
    if (!sessionStorage.getItem(this.sessionStorageKeyName)) {
      const promptReturn = prompt('What\'s your name?');
      if (promptReturn != null && promptReturn.length > 0) {
        this.user = promptReturn;
        this.logTime = new Date();
        sessionStorage.setItem(this.sessionStorageKeyName, this.user);
      } else {
        return;
      }
    } else {
      this.user = sessionStorage.getItem(this.sessionStorageKeyName);
    }

    this.server = io(this.serverURL);
  }

  public logOut(): void {
    sessionStorage.removeItem(this.sessionStorageKeyName);
    this.user = null;
    this.logTime = null;

    this.server.close();
    this.server = null;
    this.connected = false;
  }

}
