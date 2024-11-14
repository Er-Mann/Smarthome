import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from "@angular/material/expansion";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  exports: [
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
  ]
})
export class MaterialDesignModule { }
