import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrls = environment.apiUrl;
 constructor(private http: HttpClient, private router: Router){}

login(email: string, password: string): Observable<any> {
  return this.http.post(`${this.apiUrls}/auth/login`, { email, password }).pipe(
    tap((response: any) => {
      localStorage.setItem('token', response.token);
    })
  );
}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  //   getUserRole(): string | null {
  //   const token = this.getToken();
  //   if (!token) return null;

  //   const decoded: any = jwtDecode(token);
  //   console.log("Decoded token:", decoded);
  //  // return decoded["role"] || null;
  //   return decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || null;
  // }



  getUserRole(): string {
  const token = localStorage.getItem('token');
  if (!token) return '';
  const decoded: any = jwtDecode(token);
    console.log("Decoded token:", decoded);

  const payload = JSON.parse(atob(token.split('.')[1]));
  // Match the claim in your JWT
  return payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || '';
}
}
