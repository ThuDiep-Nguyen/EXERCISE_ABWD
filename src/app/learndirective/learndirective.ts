import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learndirective',
  imports: [CommonModule],  // Thêm CommonModule vào đây
  templateUrl: './learndirective.html',
  styleUrl: './learndirective.css',
})
export class Learndirective {
  flag_value: number = 1;
  
  changeView() {
    if(this.flag_value == 1)
      this.flag_value = 2;
    else
      this.flag_value = 1;
  }
  products=["Thuốc lào", "Thuốc lá", "Thuốc trừ sâu"]
  customers=[
    {"id":"c1", "name":"Ô mai chuối", "phone":"0785236598"},
    {"id":"c2", "name":"Ô tố kê", "phone":"0984569871"},
    {"id":"c3", "name":"Ô kìa con gà gáy", "phone":"0981236547"},
  ]
}