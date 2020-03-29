import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
  editFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.editFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
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
