import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeAddressDialogComponent } from './change-address-dialog/change-address-dialog.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  customer = {
    name: 'John Smith',
    address: '12345 TEST AVE, SLC, UT 813456'
  };

  orders = [{
    orderNumber: 1,
    price: 45.00,
    status: 'Shipped'
  },
  {
    orderNumber: 2,
    price: 15.00,
    status: 'Processing'
  },
  {
    orderNumber: 3,
    price: 23.00,
    status: 'Delivered'
  }
  ];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  onChangeShippingAddress() {
    const dialogRef = this.dialog.open(ChangeAddressDialogComponent, {
      data: { address: this.customer.address }
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO: Add database update for address
      if (result && result !== '') {
        this.customer.address = result;
      }
    });
  }

}
