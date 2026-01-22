import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute, Router } from '@angular/router'; // <--- QUAN TRỌNG: Phải lấy từ @angular/router

@Component({
  selector: 'app-productdetail',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './productdetail.html',
  styleUrl: './productdetail.css',
})
export class Productdetail {
  // Dữ liệu mẫu
  products = [
    {"id":"p1", "name":"Coca","price":15, "image":"https://cdn.tgdd.vn/Products/Images/2443/76451/bhx/nuoc-ngot-coca-cola-lon-320ml-202304131107525481.jpg"},
    {"id":"p2", "name":"Pepsi","price":15, "image":"https://cdn.tgdd.vn/Products/Images/2443/76467/bhx/nuoc-ngot-pepsi-cola-lon-320ml-202407131656260952.jpg"},
    {"id":"p3", "name":"Redbull","price":15, "image":"https://cdn.tgdd.vn/Products/Images/3226/76513/bhx/nuoc-tang-luc-redbull-lon-250ml-15112018162747.JPG"},
  ];
  
  product_selected: any; // Biến chứa sản phẩm tìm thấy

  constructor(private router: Router, private activeRouter: ActivatedRoute) {
    // Lắng nghe thay đổi trên thanh địa chỉ URL
    this.activeRouter.paramMap.subscribe((param) => {
      let id = param.get("id"); // Lấy id từ url (ví dụ p1)
      if (id) {
        // Tìm sản phẩm trong danh sách
        this.product_selected = this.products.find(p => p.id == id);
      }
    });
  }
}