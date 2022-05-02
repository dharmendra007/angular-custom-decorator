import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AutounsubscribeComponent } from './autounsubscribe/autounsubscribe.component';
import { TesteService } from './teste.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AutounsubscribeComponent, HelloComponent],
  providers: [TesteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
