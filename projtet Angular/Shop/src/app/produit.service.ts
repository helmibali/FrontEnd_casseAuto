import { Injectable } from '@angular/core';
import { Produit } from './model/produit.model';
import { Observable, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Modele } from './model/modele.model';
import { Categorie } from './model/categorie.model';
import { Marque } from './model/marque.model';

const httpOPtions = {
 headers : new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
//apiURL : string =  'http://localhost:8080/produits/api';
apiURL : string =  'http://localhost:8085/api/produits';
produits :Produit[];
 produit :Produit;
 public modeles:Modele[];
 public marque:Marque;
 public categorie:Categorie;

  constructor(private http : HttpClient) { 
    // this.produits =[
    //   { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation: new Date("01/14/2011")},
    //   { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
    //   { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
    //       ];
  }
listeProduits():Observable<Produit[]>{
  
  return this.http.get<Produit[]>(this.apiURL);
}


ajouterProduit(prod: Produit):Observable<Produit>{
 return this.http.post<Produit>(this.apiURL, prod, httpOPtions);
}
supprimerProduit(id: number){

  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOPtions);
  }


consulterProduit(id : number): Observable<Produit>{

  const url = `${this.apiURL}/${id}`;
  return this.http.get<Produit>(url);

}


trierProduits(){
  this.produits = this.produits.sort((n1,n2) => {
    if (n1.idProduit > n2.idProduit){
      return 1;
    }
    if (n1.idProduit > n2.idProduit) {
      return -1;
    }
    return 0;
  });
}



updateProduit(prod : Produit):Observable<Produit>{
return this.http.put<Produit>(this.apiURL, prod, httpOPtions);
}
   getProduitModeles(id :number){
      this.produits.forEach((curProduit) => {
      if( curProduit.idProduit == id ) {
      this.modeles = curProduit.modeles;
      }
      });
}
}
