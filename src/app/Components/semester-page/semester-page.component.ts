import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-semester-page',
  imports: [CommonModule],
  templateUrl: './semester-page.component.html',
  styleUrl: './semester-page.component.css'
})
export class SemesterPageComponent {
  
  cardNo:any=[1,2,3,4,5,6,7,8,9,10];

}
