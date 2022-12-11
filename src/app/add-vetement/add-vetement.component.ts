import { VetementService } from './../services/vetement.service';
import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html'
})
export class AddVetementComponent implements OnInit {
  newvetement= new Vetement();
  marque!: Marque[];
  newidm!: number;
  newmarque!: Marque;
  constructor(private   vetementService:VetementService , private router:Router) { }

  ngOnInit() {
    this.marque = this.vetementService.listerMarque();
  }


  addVetement(){
    this.vetementService.ajoutervetement(this.newvetement).subscribe(vetement=>{this.newvetement=vetement;});
    this.router.navigate(['vetements']);
  }


}
