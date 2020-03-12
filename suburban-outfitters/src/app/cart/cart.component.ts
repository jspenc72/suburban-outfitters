import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  cartItems: any;
  panelOpenState = false;
  constructor(private _formBuilder: FormBuilder) {
    this.cartItems = [
      { value: 100, image: "https://picsum.photos/200?random=1", description: "Product 1", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=2", description: "Product 2", points: 10}, 
      { value: 100, image: "https://picsum.photos/200?random=3", description: "Product 3", points: 10}]
    
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
