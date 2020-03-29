import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-inventory-item',
  templateUrl: './edit-inventory-item.component.html',
  styleUrls: ['./edit-inventory-item.component.scss']
})
export class EditInventoryItemComponent implements OnInit {
  editFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.editFormGroup = this._formBuilder.group({
      cardName: ['', Validators.required],
      cardType: ['', Validators.required],
      cardValue: ['', Validators.required],
      points: ['', Validators.required],
      cardImageUrl: ['', Validators.required]
    });
  }

  submit(): void {
    console.log("create");
    console.log(this.editFormGroup.value);
    // const card: GiftCard = this.newFormGroup.value
    // this.giftCardService.addGiftCard(card).subscribe((data: any)=>{
    //   this.router.navigateByUrl('/card-list', { state: { item: data  } });
    // })
  }
}
