import { Component } from '@angular/core';
import { Customerservice } from '../customerservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listcustomer2',
  imports: [CommonModule],
  templateUrl: './listcustomer2.html',
  styleUrl: './listcustomer2.css',
})
export class Listcustomer2 {
  customers: any
  constructor(private cs:Customerservice) 
  {
    this.customers=cs.get_all_customer()
  }
}
