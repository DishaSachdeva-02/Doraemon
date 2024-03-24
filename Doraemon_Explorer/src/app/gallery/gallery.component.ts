import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { gallery } from '../info';
import { NgFor, NgIf } from '@angular/common';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(private dataservice:DataService,private location:Location){}
  list?:gallery[];
  getGallery(){
    this.dataservice.getgallery().subscribe(l=>this.list=l);
  }
  ngOnInit(){
    this.getGallery();
  }
  goback(){
    this.location.back();
  }
}
