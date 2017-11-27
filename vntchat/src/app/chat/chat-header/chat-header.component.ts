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
    this.usuario = _chatService.nomeUsuario;
    this.logTime = _chatService.loggedTime;
    }

  ngOnInit() {
  }

}
