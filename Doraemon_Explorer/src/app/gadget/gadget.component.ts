import { Component } from '@angular/core';
import { gadget } from '../info';
import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gadget',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './gadget.component.html',
  styleUrl: './gadget.component.css'
})
export class GadgetComponent {
  constructor(private dataservice:DataService){}
  list?:gadget[];
  getGadget(){
    this.dataservice.getgadget().subscribe(l=>this.list=l);
  }
  ngOnInit(){
    this.getGadget();
  }
  delete(l:gadget){
    this.list=this.list?.filter(gadget=>gadget!=l);
    this.dataservice.deletegadget(l.id).subscribe();
  }
}
