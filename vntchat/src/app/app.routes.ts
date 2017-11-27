import { ChatComponent } from './chat/chat.component';
import { SobreComponent } from './sobre/sobre.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', component: ChatComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
