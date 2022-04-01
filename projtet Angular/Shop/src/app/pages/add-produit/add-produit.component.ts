import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/model/produit.model';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
 

  constructor(private produitService:ProduitService
             ,private router:Router) { }
    addProduit(){
      console.log(this.newProduit);
      this.produitService.ajouterProduit(this.newProduit).subscribe(prod=> {
        console.log(prod);
      });
      this.router.navigate(['produits']);
    }  


  

  ngOnInit(): void {
  }

}
