import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  phone: string;
  abbreviation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 2, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 3, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 4, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 5, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 6, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 7, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 8, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 9, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
  {position: 10, name: 'Invenotry Item  Name', phone: "1-801-456-789", abbreviation: 'C1'},
];

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.scss']
})
export class ManageInventoryComponent implements OnInit {
  @Input() inventory: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayCreateInventory(): void {
    this.router.navigateByUrl('/create-inventory');
  }
  displayEdit(customer: any): void {
    console.log(customer);
    this.router.navigateByUrl('/edit-customer', { state: { item: customer  } });
  }
  delete(customer: any): void {
    console.log(customer);
  }

}
