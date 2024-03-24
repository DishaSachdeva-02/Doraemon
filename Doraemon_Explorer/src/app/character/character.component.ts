import { Component } from '@angular/core';
import { character } from '../info';
import { DataService } from '../data.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  constructor(private dataservice:DataService){}
  list?:character[];
  getCharacter(){
    return this.dataservice.getcharacter().subscribe(l=>this.list=l);
  }
  ngOnInit(){
     this.getCharacter();
  }
}
