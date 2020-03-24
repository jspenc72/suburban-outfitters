import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeAddressDialogComponent } from './change-address-dialog/change-address-dialog.component';
import { ChangeEmailDialogComponent } from './change-email-dialog/change-email-dialog.component';
import { ChangePaymentDialogComponent } from './change-payment-dialog/change-payment-dialog.component';
import { ReturnItemDialogComponent } from './return-item-dialog/return-item-dialog.component';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  customer = {
    name: 'John Smith',
    address: '12345 TEST AVE, SLC, UT 813456',
    email: 'johnsmith@utah.edu',
    creditcard: '5252'
  };

  orders = [{
    orderNumber: 123456789,
    price: 45.00,
    status: 'Shipped'
  },
  {
    orderNumber: 123456888,
    price: 15.00,
    status: 'Processing'
  },
  {
    orderNumber: 123457777,
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

  onChangeEmailAddress() {
    const dialogRef = this.dialog.open(ChangeEmailDialogComponent, {
      data: { email: this.customer.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO: Add database update for address
      if (result && result !== '') {
        this.customer.email = result;
      }
    });
  }

  onChangePayment() {
    const dialogRef = this.dialog.open(ChangePaymentDialogComponent, {
      data: { creditcard: this.customer.creditcard }
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO: Add database update for address
      if (result && result !== '') {
        this.customer.creditcard = result;
      }
    });
  }

  onReturnItem() {
    const dialogRef = this.dialog.open(ReturnItemDialogComponent, {
      //data: { creditcard: this.customer.creditcard }
    });

    dialogRef.afterClosed().subscribe(result => {
      // TODO: Add database update for order returns
      if (result && result !== '') {
        // this.customer.creditcard = result;
      }
    });
  }
}
