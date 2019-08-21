import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getInfo(){
    return this.http.get("http://localhost:3000/posts");
  }
  submitData(id,body) : Observable<any>{
    
        
    return this.http.put("http://localhost:3000/posts/"+id, body);
    
    }
  deleteMethod(id) : Observable<any>{
    
    return this.http.delete("http://localhost:3000/posts"+"/" +id);


    
    }
}
