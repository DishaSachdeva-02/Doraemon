import { Component } from '@angular/core';
import { gadget } from '../info';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gadgetdetail',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './gadgetdetail.component.html',
  styleUrl: './gadgetdetail.component.css'
})
export class GadgetdetailComponent {
constructor(private dataservice:DataService,private activatedroute:ActivatedRoute,private location:Location){}
 selectedgadget?:gadget;

getGadgetdetail(){
  const myid=Number(this.activatedroute.snapshot.paramMap.get('id'));
  this.dataservice.getgadgetdetail(myid).subscribe(g=>this.selectedgadget=g);
}
ngOnInit(){
  this.getGadgetdetail();
}
save(){
  if(this.selectedgadget){
    this.dataservice.updategadget(this.selectedgadget).subscribe(()=>this.goback());
  }
}
goback(){
  this.location.back();
}
}
