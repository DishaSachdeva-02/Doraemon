import { Component } from '@angular/core';
import { gadget } from '../info';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-gadgetdetail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './gadgetdetail.component.html',
  styleUrl: './gadgetdetail.component.css'
})
export class GadgetdetailComponent {
constructor(private dataservice:DataService,private activatedroute:ActivatedRoute){}
 selectedgadget?:gadget;

getGadgetdetail(){
  const myid=Number(this.activatedroute.snapshot.paramMap.get('id'));
  this.dataservice.getgadgetdetail(myid).subscribe(g=>this.selectedgadget=g);
}
ngOnInit(){
  this.getGadgetdetail();
}
}
