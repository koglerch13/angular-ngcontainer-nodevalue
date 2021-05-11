import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[my-directive]'
})
export class MyDirectiveDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) {
    console.log('constructor');
    this.test();
   }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    this.test();
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.test();
  }

  private test():void {
    const nativeElement = this.el.nativeElement;

    console.log(`nodeValue: ${nativeElement.nodeValue}`);
    console.log(`nodeName: ${nativeElement.nodeName}`);

    console.log('');
  }

}
