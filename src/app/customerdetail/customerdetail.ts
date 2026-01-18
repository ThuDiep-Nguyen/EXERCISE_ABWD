import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Customerservice } from '../customerservice';

@Component({
  selector: 'app-customerdetail',
  imports: [CommonModule],
  templateUrl: './customerdetail.html', // Đảm bảo đường dẫn đúng
  styleUrl: './customerdetail.css',     // Đảm bảo đường dẫn đúng
})
export class Customerdetail {
  // Biến để lưu thông tin khách hàng tìm được
  selectedCustomer: any = null;

  constructor(private cs: Customerservice) {}

  search_customer_by_id(id: string) {
    let c = this.cs.get_customer_detail(id);
    if (c != null) {
      this.selectedCustomer = c;
    } else {
      this.selectedCustomer = null;
      alert("Không tìm thấy thông tin khách hàng");
    }
  }
}