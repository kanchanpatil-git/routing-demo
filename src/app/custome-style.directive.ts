import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective {

  constructor(private ele :ElementRef) {
    ele.nativeElement.style.color="red";

   }
  
}
