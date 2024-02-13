import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { EventListComponent } from './pages/event-list/event-list.component';
import { AvisListComponent } from './pages/avis-list/avis-list.component';
import { ReclamationListComponent } from './pages/reclamation-list/reclamation-list.component';
import { AnnonceListComponent } from './pages/annonce-list/annonce-list.component';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GroupeListComponent } from './pages/groupe-list/groupe-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorsInterceptor } from './CorsInterceptor';
import { ChatboxComponent } from './layouts/chatbox/chatbox.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatComponent } from './pages/chat/chat.component';

const config: SocketIoConfig = { url: 'http://localhost:8097', options: {} };


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    ComponentsModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    CommonModule,
    RouterModule,
    MatTableModule,
    AppRoutingModule,
    NgbModule,
    SocketIoModule.forRoot(config)
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    EventListComponent,
    AvisListComponent,
    ReclamationListComponent,
    AnnonceListComponent,
    GroupeListComponent,
    ChatboxComponent,
    ChatComponent
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
