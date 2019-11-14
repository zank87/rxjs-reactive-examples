import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserApiService } from './services/user-api.service';
import { UserFacadeService } from './services/user-facade.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, UserProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserApiService, UserFacadeService]
})
export class AppModule { }
