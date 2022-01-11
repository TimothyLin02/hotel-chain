import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  customers : Customer[] = [];
  currentIndex : Number = -1;
  customer = new Customer();
  submitted = false;
  firstTime = true;

  error = false;
  errorMsg?: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.customerService.getAll()
      .subscribe(
        (data : Customer[]) => {
          this.customers = data;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  saveCustomer(): void {
    this.customerService.create(this.customer)
      .subscribe(
        response => {
          console.log(response);
          this.customers.push(response);
          this.submitted = true;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMsg = error.error.Exception;
        });
  }

  newCustomer(): void {
    this.firstTime = false;
    this.submitted = false;
    this.customer = new Customer();
    this.error = false;
  }
}
