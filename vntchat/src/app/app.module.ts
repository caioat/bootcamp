import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatItemComponent } from './chat/chat-item/chat-item.component';
import { ChatService } from './chat/chat.service';
import { ChatHeaderComponent } from './chat/chat-header/chat-header.component';
import { routing } from './app.routes';
import { SobreComponent } from './sobre/sobre.component';
import { ConnectionService } from './sobre/connection.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ChatItemComponent,
    ChatHeaderComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [ChatService, ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
