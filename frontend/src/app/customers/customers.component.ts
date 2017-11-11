import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  add(name: string):void {
    name = name.trim();
    if(!name) return;

    this.customerService.addCustomer({ name } as Customer)
      .subscribe(() => this.getCustomers());
  }
}
