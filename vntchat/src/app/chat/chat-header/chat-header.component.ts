import { ChatService } from '../chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit {

  public usuario: string;
  public logTime: Date;

  constructor(private _chatService: ChatService) {
    this.fillUserInfo();
  }

  ngOnInit() {
  }

  private fillUserInfo(): void {
    this.usuario = this._chatService.nomeUsuario;
    this.logTime = this._chatService.loggedTime;
  }

  public logout(): void {
    sessionStorage.removeItem('nome');
    this._chatService.logIn();
    this.fillUserInfo();
  }
}
