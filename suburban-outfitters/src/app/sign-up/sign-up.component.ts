import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  username: string;
  password: string;
  confirm_password: string;
  email: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
