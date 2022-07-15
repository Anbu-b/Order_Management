import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './Authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public route:Router,public translate:TranslateService,public authservice:AuthService){
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    this.authservice.postlogin=null;
    this.authservice.isloggedIn=false;
    this.authservice.allowroute=true;
        this.route.navigate(['/Login']);
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event: Event) {
    window.location.reload();
  }
 
  @HostListener('window:beforeunload', ['$event'])
  public beforeunloadHandler($event:any) {
    var msg = 'window close'
    $event.returnValue = msg;
  }
}
