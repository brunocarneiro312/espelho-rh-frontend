import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[hightlight]'
})
export class HighlightDirective implements OnInit {

  @Input() defaultColor: string;
  @Input() highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseover') mouseover(event: Event) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
}
