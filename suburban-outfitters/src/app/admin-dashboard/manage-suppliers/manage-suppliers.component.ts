import { Component, OnInit, Input} from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  phone: string;
  abbreviation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 2, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 3, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 4, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 5, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 6, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 7, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 8, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 9, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 10, name: 'Supplier Name', phone: "1-801-456-789", abbreviation: 'C1'},
];

@Component({
  selector: 'app-manage-suppliers',
  templateUrl: './manage-suppliers.component.html',
  styleUrls: ['./manage-suppliers.component.scss']
})
export class ManageSuppliersComponent implements OnInit {
  @Input() suppliers: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayCreateSupplier(): void {
  }

}
