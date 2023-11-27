import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/auth.models';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
import { MenuItem } from '../models/MenuItems';
const API_URL=GlobalComponent.API_URL;
@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }
    registerRh(model:User){
        return this.http.post<User>(API_URL+"signup/user",model);
      }
      fiddalluser(){
        return this.http.get<User>(API_URL+"users/all");
      }
      deleteUser(UserId: string): Observable<any> {
        
        return this.http.delete(API_URL+"users/"+UserId);
      }
      getUserById(UserId: string){
        return this.http.get<User>(API_URL+"users/"+UserId);
      }
      updateUser(UserId:string,updatedUser: any){
        return this.http.put<User>(API_URL+"users/"+UserId, updatedUser);
      }
      updateMenu(UserId:string,menuItems:MenuItem[]){
        return this.http.put<MenuItem[]>(API_URL+"users/updateMenu/"+UserId, menuItems);
      }
}
