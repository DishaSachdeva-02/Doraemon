import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { character, gadget, gallery } from './info';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  httpOptions={headers:new HttpHeaders({'Content-type':'json-description'})}
  private url1='api/mycharacters'
  private url2='api/mygadgets'
  private url3='api/mygallery'

  getcharacter():Observable<character[]>{
    return this.http.get<character[]>(this.url1);
  }
  getgadget():Observable<gadget[]>{
    return this.http.get<gadget[]>(this.url2);
  }
  getgallery():Observable<gallery[]>{
    return this.http.get<gallery[]>(this.url3);
  }
}
