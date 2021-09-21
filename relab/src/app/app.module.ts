import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core'; 
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    AgmCoreModule.forRoot({apiKey:'AIzaSyDV7I2M3o1jQVcNzmj949a1krCfqSge_qk'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
