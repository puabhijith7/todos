import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }
  title = 'Angular TUDOS';
  a:any[] =[]
  h:any
  j:any
  b:any[] =[]
          fun(t:any,d:any)
         {                    
              this.h="Event Name"
              this.j="Date"
              this.a.push({t})
              this.b.push({d})
         }
         delete1(i:any){
          this.a.splice(i,1)
          this.b.splice(i,1)
         } 
  ngOnInit(): void {    
  }
}
