import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public form = {
    name: null,
    email: null,
    password:null,
}
  ngOnInit(): void {
  }
  onSubmit() {
   return this.http.post('http://localhost:8000/api/register', this.form).subscribe(m => {
      console.log(m);
    })
  }
}
