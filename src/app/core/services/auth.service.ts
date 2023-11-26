import { Injectable } from '@angular/core';
import { getFirebaseBackend } from '../../authUtils';
import { User } from '../models/auth.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { GlobalComponent } from "../../global-component";
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginModel } from '../models/LoginModel';
import { TokenModel } from '../models/token';
import { Router } from '@angular/router';

const AUTH_API = GlobalComponent.AUTH_API;

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

@Injectable({ providedIn: 'root' })

/**
 * Auth-service Component
 */
export class AuthenticationService {

    user!: User;
    currentUserValue: any;

    private currentUserSubject: BehaviorSubject<User>;
    // public currentUser: Observable<User>;
    jwtService: JwtHelperService = new JwtHelperService();

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
        // this.currentUser = this.currentUserSubject.asObservable();
     }

    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email: string, first_name: string, password: string) {        
        // return getFirebaseBackend()!.registerUser(email, password).then((response: any) => {
        //     const user = response;
        //     return user;
        // });

        // Register Api
        return this.http.post(AUTH_API + 'signup', {
            email,
            first_name,
            password,
          }, httpOptions);
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    // login(email: string, password: string) {
    //     // return getFirebaseBackend()!.loginUser(email, password).then((response: any) => {
    //     //     const user = response;
    //     //     return user;
    //     // });

    //     return this.http.post(AUTH_API + 'signin', {
    //         email,
    //         password
    //       }, httpOptions);
    // }
    login(payload: LoginModel) {
        return this.http
          .post(AUTH_API + 'signin', payload)
          .pipe(
            map((data) => {
              var token = data as TokenModel;
              var user = data as User;
              const connectedUser = {
                id: user.id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                roles: user.roles,
                menuItems:user.menuItems,
                token: token.token,
                tokenType: 'Bearer'
            };
              
              localStorage.setItem('token', JSON.stringify(token));
              localStorage.setItem('currentUser', JSON.stringify(connectedUser));
                
              var userInfo = this.jwtService.decodeToken(token.token!!) as User;
    
              this.currentUserSubject.next(userInfo);
              if (userInfo.roles && Array.isArray(userInfo.roles)) {
                this.redirectUser(userInfo.roles);
                // Redirect based on roles
              }
              this.router.navigate(['/']); 
              return data;
            }),
            catchError((error) => {
              console.log(error.error.message);
              const errorMessage = error.error.message || 'An unknown error occurred';
              return throwError(errorMessage);
            })
          );
      }

    /**
     * Returns the current user
     */
    public currentUser(): any {
        return getFirebaseBackend()!.getAuthenticatedUser();
    }

    /**
     * Logout the user
     */
    logout() {
        // logout the user
        // return getFirebaseBackend()!.logout();
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.currentUserSubject.next(null!);
    }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
        return getFirebaseBackend()!.forgetPassword(email).then((response: any) => {
            const message = response.data;
            return message;
        });
    }
    redirectUser = (roles: string[]) => {
        if (roles.includes('ROLE_ADMIN')) {
          this.router.navigateByUrl('/');
        } else if (roles.includes('ROLE_USER')) {
          this.router.navigateByUrl('/');
        } else {
          // Handle other roles or no roles
          // Redirect to a default page or show an error message
        }
      };

}

