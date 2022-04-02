import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../model/categorie.model';

const httpOPtions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
 };
@Injectable({
  providedIn: 'root'
})
export class CatService {
  apiURL:string = 'http://localhost:8085/api/categorie';
  apiURLu:string = 'http://localhost:8085/api/categorie/update';
  apiURLd:string = 'http://localhost:8085/api/categorie/delete';

  constructor(private http : HttpClient) { }

  listeCategories():Observable<Categorie[]>{
  
    return this.http.get<Categorie[]>('http://localhost:8085/api/categorie/liste');
  }
  consulterCategorie(id : number): Observable<Categorie>{

    const url = `${this.apiURL}/${id}`;
    return this.http.get<Categorie>(url);
  
  }

  updateCategorie(cat : Categorie ,id :number):Observable<Categorie>{
    const url = `${this.apiURLu}/${id}`;
    return this.http.put<Categorie>(url , cat, httpOPtions );

  }
  ajouterCategorie(cat : Categorie):Observable<Categorie>{
    return this.http.post<Categorie>('http://localhost:8085/api/categorie/add',cat,httpOPtions);
  }
  supprimerCategorie(id: number){

    const url = `${this.apiURLd}/${id}`;
    return this.http.delete(url, httpOPtions);
    }
}


