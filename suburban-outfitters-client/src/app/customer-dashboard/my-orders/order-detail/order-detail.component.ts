import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { OrdersService } from '../../../services/orders.service';
import { OrderLineItemService } from '../../../services/order-line-item.service';
import { IOrderResponse, IOrderDetial } from 'src/app/models/order.model';
import { IOrderLineItem } from 'src/app/models/order-line-item';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order_id: number;
  order: IOrderDetial;
  constructor(private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService,
    private ordersService: OrdersService,
    private orderlineItemService: OrderLineItemService
  ) { }

  loadOrderDetails(id: any) {
    this.ordersService.getBy(id).subscribe((data: any) => {
      this.order = data;
    });
  }



  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params['id'])
          this.loadOrderDetails(params['id'])
        }
      );
  }


  onReturnOrder() {

  }

}
