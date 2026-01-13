import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  student_id: string = "SV123";
  student_name: string = "Nguyen Thi Thu Diep";
  student_email: string = "thudiep1911@gmail.com";
  my_img = "/assets/img.jpg";  // ← SỬA DÒNG NÀY
}