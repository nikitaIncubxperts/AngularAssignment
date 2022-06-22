import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckfirstletter]'
})
export class CheckfirstletterDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.textDecoration = "underline";
  }

}
