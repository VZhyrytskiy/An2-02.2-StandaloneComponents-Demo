import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ADMIN_API_KEY } from '../../admin.routes';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(@Inject(ADMIN_API_KEY) public apiKey: number) { }

  ngOnInit(): void {
  }

}
