import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { OrdersService } from '../../../services/orders.service';
import { OrderLineItemService } from '../../../services/order-line-item.service';
import { IOrderResponse } from 'src/app/models/order.model';
import { IOrderLineItem } from 'src/app/models/order-line-item';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order_id: number;
  order: IOrderResponse;
  orderLineItems: IOrderLineItem[];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private ordersService: OrdersService,
    private orderlineItemService: OrderLineItemService
  ) {
    // cookieService.set('laravel_session', 'value')
    // console.log('laravel_session', cookieService.getAll())

  }

  loadOrderDetails(id: any) {
    this.ordersService.getBy(id).subscribe((data: any) => {
      console.log(data)
      this.order = data;

    })
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
