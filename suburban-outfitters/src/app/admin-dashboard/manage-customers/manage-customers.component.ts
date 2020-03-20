import { Component, OnInit, Input } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  phone: string;
  abbreviation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 2, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 3, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 4, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 5, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 6, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 7, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 8, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 9, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 10, name: 'Customer Name', phone: "1-801-456-789", abbreviation: 'C1'},
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
  constructor() { }

  ngOnInit(): void {
  }

}
