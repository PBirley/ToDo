import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  addToList (listItem:any) {
    console.log('Sending Post request', listItem)
    return this.http.post(`http://localhost:3000/add`, listItem,);
  }

  getList (): Observable<any> {
    return this.http.get('http://localhost:3000/list')
  }

  deleteItem (id:string) {
    console.log('sending delete request')
    return this.http.delete(`http://localhost:3000/item/${id}`)
  }
}
