import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.scss']
})
export class CreateSupplierComponent implements OnInit {
  newFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.newFormGroup = this._formBuilder.group({
      cardName: ['', Validators.required],
      cardType: ['', Validators.required],
      cardValue: ['', Validators.required],
      points: ['', Validators.required],
      cardImageUrl: ['', Validators.required]
    });
  }

  create(): void {
    console.log("create");
    console.log(this.newFormGroup.value);
    // const card: GiftCard = this.newFormGroup.value
    // this.giftCardService.addGiftCard(card).subscribe((data: any)=>{
    //   this.router.navigateByUrl('/card-list', { state: { item: data  } });
    // })
  }
}
