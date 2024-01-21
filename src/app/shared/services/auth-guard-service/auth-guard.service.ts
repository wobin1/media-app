import { Injectable } from '@angular/core';
import { HelperService } from '../helper-service/helper.service';
import { RoutingService } from '../routing-service/routing.service';
import { StorageService } from '../local-storage-service/storage.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  token:any;
  constructor(private helper: HelperService,
              private router: RoutingService,
              private storage: StorageService,
              private toastr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    // catching errors while checking if token is in browser
    try {
      this.token = this.helper.get_token()
    } catch (error) {
      this.token = false
    }

    // checking if user token is stored on browser local storage
    if (this.token) {
      return true;
        } else {
          // routing user to login
          this.router.route('auth/login') 
          console.log("no token")

          // toasting message 
          this.toastr.error("Please login", "Login Required")
          return false;
          }
    
  }


}