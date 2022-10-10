import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBindhost]'
})
export class BindhostDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

}
