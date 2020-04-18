import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CartState } from './store/cart.state';
import { ICartItem } from './models/cart-item.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'suburban-outfitters';

  @Select(CartState.itemCount) cartItemCount$: Observable<number>;

  constructor(private store: Store) { }
}
