import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  styleUrls: ['./update-vetement.component.css']
})
export class UpdateVetementComponent {

  currentVetement = new Vetement();
  marque!: Marque[];
  updatedidm!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private vetementService: VetementService,private router :Router) { }

    ngOnInit() {
      this.vetementService.consultervetement(this.activatedRoute.snapshot.params['id']).subscribe(vetement => {
        this.currentVetement = vetement;
      
      }, err => {
        console.log(err);
      }
      );
      }
      updateVetement(){
        this.vetementService.updatevetement(this.currentVetement).subscribe(vetement=>{this.currentVetement=vetement;});
        this.router.navigate(['vetements']);
      }
      

     }



