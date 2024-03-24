import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { character } from '../info';
import { gadget } from '../info';
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(private dataservice:DataService,private location:Location){}
  add(opt:string,name:string, main:string,imgpath:string){

      name=name.trim();
      main=main.trim();
      imgpath=imgpath.trim();
      
      if(!name||!opt||!main||!imgpath){
        return;
      }
    if(opt=="characters"){
      const Talent=main;
      this.dataservice.addchar({name,Talent,imgpath} as character).subscribe(()=>this.goback());
    }
    if(opt=="gadgets"){
      const work=main;
      this.dataservice.addgad({name,work,imgpath} as gadget).subscribe(()=>this.goback());
    }
    
  }
  goback(){
    this.location.back();
  }
}
