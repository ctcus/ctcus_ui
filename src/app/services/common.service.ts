import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Member {
  _id?: string;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  addUser(data: Member) {
    return this.http.post<Member>(`${environment.API_URL}/member`, data).pipe(
      map((response: Member) => {
        return response;
      })
    );
  }
}
