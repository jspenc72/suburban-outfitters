import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
export interface PeriodicElement {
  id: number;
  name: string;
  position: number;
  phone: string;
  abbreviation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, position: 1, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {id: 2, position: 2, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {id: 3, position: 3, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {id: 4, position: 4, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {id: 5, position: 5, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {id: 6, position: 6, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {id: 7, position: 7, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {id: 8, position: 8, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {id: 9, position: 9, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {id: 10, position: 10, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
];

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {
  @Input() customers: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayEdit(customer: any): void {
    console.log(customer);
    this.router.navigateByUrl('/admin-dashboard/edit-customer/'+customer.id, { state: { item: customer  } });
  }

  displayCreateCustomer(): void {
    this.router.navigateByUrl('/admin-dashboard/create-customer');
  }

  delete(customer: any): void {
    console.log(customer);
  }
}
