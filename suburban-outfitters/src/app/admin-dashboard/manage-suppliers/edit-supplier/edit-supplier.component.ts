import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, RouterState, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from "../../../services/supplier.service";
import { ISupplier } from "../../../models/supplier.model";

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.scss']
})
export class EditSupplierComponent implements OnInit {
  editFormGroup: FormGroup;
  state$: any
  constructor(private supplierService: SupplierService, public route: ActivatedRoute, private _formBuilder: FormBuilder, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.editFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      cardImageUrl: ['', Validators.required]
    });
  }

  load(): void {
    var id = this.route.snapshot.paramMap.get('id')
    if(this.route.snapshot.paramMap.get('id')){
      this.supplierService.getBy(parseInt(id)).subscribe((data: any)=>{
        this.editFormGroup = this._formBuilder.group({
          name: [data.name, Validators.required],
          email: [data.email, Validators.required],
          address: [data.address, Validators.required],
          phone: [data.phone, Validators.required],
          id: [data.id, Validators.required]
        });
      })  
    }else{

    }
  }

  submit(): void {
    console.log("submit");
    console.log(this.editFormGroup.value);
    const item: ISupplier = this.editFormGroup.value
    this.supplierService.update(item).subscribe((data: any)=>{
      this.router.navigateByUrl('/admin-dashboard/manage-suppliers');
    })
  }

}
