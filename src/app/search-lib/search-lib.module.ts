import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchLIBComponent } from './search-lib.component';



 
@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
     IonicModule,
    CommonModule,
    FormsModule,
   
    RouterModule.forChild([{ path: '', component: SearchLIBComponent }])
  ],
  declarations: [SearchLIBComponent]}
  
)

export class SearchLIBComponentModule {}




