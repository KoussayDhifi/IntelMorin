import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  readonly ROOT_URL = 'http://localhost';

  constructor(private http:HttpClient, private router:Router) { }


  login(admin:any) {
    return this.http.post(this.ROOT_URL+'/API/crudAdmin/loginAdmin.php',admin);
  }

  getToken(): string | null {
    // Retrieve JWT token from local storage
    return sessionStorage.getItem('jwtToken');
  }

  isAuthenticated(): boolean {
    // Check if JWT token exists in local storage
    return !!this.getToken();
  }

  logout() {
    sessionStorage.removeItem('jwtToken');
    this.router.navigate(['/login']);
  }
  
}
