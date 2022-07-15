import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PagerService } from './pager.service';
import { OnlynumbersDirective } from './onlyNumber/onlynumbers.directive';
import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthService } from './Authentication/auth.service';
import { AuthGuardService } from './Authentication/auth-guard.service';
import { CanDeactivateGuard } from './Authentication/candeactivate.guard';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, );
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    OnlynumbersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    
  ],
  providers: [TranslateService,PagerService,DatePipe,AuthService,AuthGuardService,{provide: LocationStrategy, useClass: HashLocationStrategy},
    CanDeactivateGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
