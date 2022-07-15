import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ComponentCanDeactivate> {
  constructor(public authservice:AuthService){}
  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {

    if(this.authservice.allowroute){
      this.authservice.allowroute=false;
      return true;
    }
    else
     return false;
    //  return true
  }
}