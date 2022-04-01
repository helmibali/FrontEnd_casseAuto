import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from './model/role.model';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// users : User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
//                   {"username":"Youssef","password":"123","roles":['USER']},
//                   {"username":"Helmi","password":"123","roles":['ADMIN']}
// ];
public loggedUser:string;
public isloggedIn:Boolean=false;
public roles:Role[];

apiURL: string = 'http://localhost:8085/api/login';

  constructor(private router:Router, private http:HttpClient) { }

  getUserFromDB(username:string):Observable<User>
  {
    const url = `${this.apiURL}/${username}`;
    return this.http.get<User>(url)
  }

  getUserslist(){
    return  this.http.get('http://localhost:8085/api/users/liste');
  }

  signIn(user:User)
  {
    this.loggedUser=user.username;
    this.isloggedIn=true;
    this.roles=user.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
  }

  isAdmin():Boolean{
    let admin: Boolean = false;
    if (!this.roles) //this.roles== undefiened
    return false;
    this.roles.forEach((curRole) => {
    if(curRole.role == 'ADMIN') {
    admin = true;
    }
    });
    return admin;
    }

    getUserRoles(username :string){
      this.getUserFromDB(username).subscribe((user: User)=>{
      this.roles = user.roles;
      });
      }


 
  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
    }



  // SignIn(user :User):Boolean{
  //   let validUser: Boolean = false;
  //   this.users.forEach((curUser)=>{
  //     if(user.username ===curUser.username && user.password == curUser.password){
  //       validUser = true;
  //       this.loggedUser = curUser.username;
  //       this.isloggedIn = true;
  //       this.roles = curUser.roles;
  //       localStorage.setItem('loggedUser',this.loggedUser);
  //       localStorage.setItem('isloggedIn',String(this.isloggedIn));

  //     }
  //   });
  //   return validUser;
  // }




  // isAdmin():Boolean{
  //   if (!this.roles) //this.roles== undefiened
  //   return false;
  //   return (this.roles.indexOf('ADMIN') >-1) ;
  //   ;
  //   }

    setLoggedUserFromLocalStorage(login : string) {
      this.loggedUser = login;
      this.isloggedIn = true;
      this.getUserRoles(login);
      }
    //   getUserRoles(username :string){
    //   this.users.forEach((curUser) => {
    //   if( curUser.username == username ) {
    //   this.roles = curUser.roles;
    //   }
    //   });
    // }

//BD Authentification
   
    
}
