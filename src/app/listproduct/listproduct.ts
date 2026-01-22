import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// Gộp chung Router, ActivatedRoute, RouterLink vào dòng này:
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-listproduct',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './listproduct.html',
  styleUrl: './listproduct.css',
})
export class Listproduct {
   products = [
    {"id":"p1", "name":"Coca","price":15, "image":"https://cdn.tgdd.vn/Products/Images/2443/76451/bhx/nuoc-ngot-coca-cola-lon-320ml-202304131107525481.jpg"},
    {"id":"p2", "name":"Pepsi","price":15, "image":"https://cdn.tgdd.vn/Products/Images/2443/76467/bhx/nuoc-ngot-pepsi-cola-lon-320ml-202407131656260952.jpg"},
    {"id":"p3", "name":"Redbull","price":15, "image":"https://cdn.tgdd.vn/Products/Images/3226/76513/bhx/nuoc-tang-luc-redbull-lon-250ml-15112018162747.JPG"},
  ];

  // Bây giờ Router ở đây là của Angular, hệ thống sẽ hiểu
  constructor(private router: Router, private activeRouter: ActivatedRoute)
  {
  }

  view_detail(pid: string)
  {
      // Điều hướng đến trang chi tiết
      this.router.navigate(["san-pham-1", pid]);
  }
}