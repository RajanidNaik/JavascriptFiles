import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.backgroundColor='#c8e6c9'
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color:string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
