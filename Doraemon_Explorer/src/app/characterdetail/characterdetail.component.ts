import { Component } from '@angular/core';
import { character } from '../info';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Location, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterdetail',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './characterdetail.component.html',
  styleUrl: './characterdetail.component.css'
})
export class CharacterdetailComponent {
  constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private location:Location){}
  selectedcharacter?:character;
  getCharacterdetail(){
    const id=Number(this.activatedroute.snapshot.paramMap.get('id'));
    this.dataservice.getcharacterdetail(id).subscribe(ch=>this.selectedcharacter=ch);
  }
  ngOnInit(){
    this.getCharacterdetail();
  }
  save(){
    if(this.selectedcharacter){
      this.dataservice.updatecharacter(this.selectedcharacter).subscribe(()=>this.goback());
    }
  }
  goback(){
     this.location.back();
  }
}
