import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './../child-standalone/child.component';



@NgModule({
  declarations: [
    ParentComponent
  ],
  imports: [
    CommonModule,
    ChildComponent
  ],
  exports: [ParentComponent]
})
export class ParentModule { }
