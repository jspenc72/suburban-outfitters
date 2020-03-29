import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  newFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.newFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
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
