import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { RouterModule, Routes, Router, RouterState, NavigationStart, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  item: any;
  state$: any
  sub: any
  constructor(private location: Location, private router: Router, public activatedRoute: ActivatedRoute) { 
    // this.item = { title: "card1", type: "", value: 100, image: "https://d2e70e9yced57e.cloudfront.net/wallethub/posts/68808/best-gift-cards.png", description: "Chick Fila-A $10 Gift Card", points: 10}
  }

  ngOnInit(): void {
    console.log(this.location.getState());
    this.state$ = this.location.getState();

    if (!this.state$.item){
        this.router.navigateByUrl('/card-list');
    }else{
      this.item = this.state$.item; 
    }
  }

}
