import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { GadgetComponent } from './gadget/gadget.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CharacterdetailComponent } from './characterdetail/characterdetail.component';
import { GadgetdetailComponent } from './gadgetdetail/gadgetdetail.component';


export const routes: Routes = [
    {path:"" , redirectTo:"/gallery" ,pathMatch:'full'},
    {path:"character", component:CharacterComponent},
    {path:"character/:id" ,component:CharacterdetailComponent},
    {path:"gadget" , component:GadgetComponent},
    {path:"gadget/:id" , component:GadgetdetailComponent},
    {path:"gallery" , component:GalleryComponent},

];
