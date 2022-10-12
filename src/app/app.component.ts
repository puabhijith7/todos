import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular TUDOS';
  s:any
  a :any
  b:any
   p=0;
          fun(t:any)
         {
            // d(this.p+2);
              this.a=t;
            // this.b=d;
             this.s=this.a
             this.p++;
             //this.disp();
            
         
         }
     /*      disp()
         {
         document.getElementById("ans").innerHTML=s;
         }
         function d(y)
         {
             var e=`Enter Customer `+y+` details :`;
             document.getElementById("z").innerHTML=e;
         }
  */
}
