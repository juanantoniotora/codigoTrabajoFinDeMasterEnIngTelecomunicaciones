import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable()
export class GuardianSiNoLogeado implements CanActivate{

    constructor(private router : Router, private cookie : CookieService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(this.cookie.get("JWT_PelisMiu") !=""){
            return true;
        } else{
            this.router.navigate(["login"])
            return false;
        }
    }
}