import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
        

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // FormsModule,
    NgbModule,
    // FormulariosModule,
    UsuariosModule,
        ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
