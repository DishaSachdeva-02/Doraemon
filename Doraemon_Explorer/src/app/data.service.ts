import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { character, gadget, gallery } from './info';
import { Observable , of } from 'rxjs';
import { catchError,map,tap } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private messageservice:MessageService) { }
  httpOptions={headers:new HttpHeaders({'Content-type':'json-description'})}
  private url1='api/mycharacters'
  private url2='api/mygadgets'
  private url3='api/mygallery'

  getcharacter():Observable<character[]>{
    return this.http.get<character[]>(this.url1).pipe(
      tap(_=>this.log('fetched characters..')),
     catchError(this.handleError<character[]>('getcharacter',[]))
    );
  }
  getgadget():Observable<gadget[]>{
    return this.http.get<gadget[]>(this.url2).pipe(
      tap(_=>this.log('fetched gadgets..')),
     catchError(this.handleError<gadget[]>('getgadget',[]))
    );
  }
  getgallery():Observable<gallery[]>{
    return this.http.get<gallery[]>(this.url3).pipe(
      tap(_=>this.log('fetched gallery..')),
     catchError(this.handleError<gallery[]>('getgallery',[]))
    );
  }
  getcharacterdetail(id:number):Observable<character>{
    return this.http.get<character>(`${this.url1}/${id}`).pipe(
      tap(_=>this.log(`fetched character detail whose id=${id}...`)),
      catchError(this.handleError<character>(`getcharacterdetail id=${id}`))
    );
  }
  getgadgetdetail(id:number):Observable<gadget>{
    return this.http.get<gadget>(`${this.url2}/${id}`).pipe(
      tap(_=>this.log(`fetched gadget detail whose id=${id}...`)),
      catchError(this.handleError<gadget>(`getgadgetdetail id=${id}`))
    );;
  }
  searchdata(term:string,compo:string):Observable<any>{
      const newurl=`api/my${compo}`
      return this.http.get(`${newurl}/?name=${term}`).pipe(
        tap(_=>this.log(`searching data for ${term}`)),
        catchError(this.handleError<any>('searchdata',[]))
      )
    
  }
  addchar(character:character):Observable<character>{
  
      return this.http.post<character>(this.url1,character,this.httpOptions).pipe(
        tap((newcharacter:character)=>this.log(`New character added with id=${newcharacter.id}`)),
        catchError(this.handleError<character>('addchar'))
      );
    
  }
  addgad(gadget:gadget):Observable<gadget>{
      return this.http.post<gadget>(this.url2,gadget,this.httpOptions).pipe(
        tap((newgadget:gadget)=>this.log(`New gadget added with id=${newgadget.id}`)),
        catchError(this.handleError<gadget>('addgad'))
      );;
  }
  deletecharacter(id:number):Observable<character>{
      return this.http.delete<character>(`${this.url1}/${id}`, this.httpOptions).pipe(
        tap(_=>this.log(`deleted character whose id=${id}`)),
        catchError(this.handleError<character>('deletecharacter'))
      )
  }
  deletegadget(id:number):Observable<gadget>{
    return this.http.delete<gadget>(`${this.url1}/${id}`, this.httpOptions).pipe(
      tap(_=>this.log(`deleted gadget whose id=${id}`)),
      catchError(this.handleError<gadget>('deletegadget'))
    )
  }
  updatecharacter(character:character):Observable<any>{
    return this.http.put(this.url1,character,this.httpOptions).pipe(
      tap(_=>this.log(`updated character whose id=${character.id}`)),
      catchError(this.handleError<any>('updatecharacter'))
    );
  }
  updategadget(gadget:gadget):Observable<any>{
    return this.http.put(this.url2,gadget,this.httpOptions).pipe(
      tap(_=>this.log(`updated gadget whose id=${gadget.id}`)),
      catchError(this.handleError<any>('updategadget'))
    );;
  }
  private handleError<T>(operation='operation', result?:T){
     return (error:any):Observable<T>=>{
      this.log(`${operation} failed: ${error.message}`)
      console.log(error);
       return of(result as T)
     }
  }
  private log(message:string){
    this.messageservice.add(`${message}`);
  }
}
