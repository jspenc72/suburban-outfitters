import { Component, OnInit, Input } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  phone: string;
  abbreviation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Product 1 Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 2, name: 'Product 2 Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 3, name: 'Product 3 Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 4, name: 'Product 4 Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 5, name: 'Product 5 Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 6, name: 'Product 6 Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 7, name: 'Product 7 Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 8, name: 'Product 8 Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 9, name: 'Product 9 Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 10, name: 'Product 10 Name', phone: "1-801-456-789", abbreviation: 'C1'},
];

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  @Input() products: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
