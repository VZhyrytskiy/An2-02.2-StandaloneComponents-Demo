import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyChildComponent } from './lazy-child.component';
import { ChildComponent } from '../child-standalone/child.component';



@NgModule({
  declarations: [
    LazyChildComponent
  ],
  imports: [
    CommonModule, ChildComponent
  ],
  exports: [LazyChildComponent]
})
export class LazyChildModule { }
