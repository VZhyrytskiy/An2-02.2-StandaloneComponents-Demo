import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  imports: [CommonModule]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
