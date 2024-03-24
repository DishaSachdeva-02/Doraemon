import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { GadgetComponent } from './gadget/gadget.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    {path:"" , redirectTo:"/gallery" ,pathMatch:'full'},
    {path:"character", component:CharacterComponent},
    {path:"gadget" , component:GadgetComponent},
    {path:"gallery" , component:GalleryComponent},

];
