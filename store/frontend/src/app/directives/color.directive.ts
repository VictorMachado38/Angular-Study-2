import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[PintarDeVermelho]'
})
export class ColorDirective {

  constructor(private el: ElementRef) {

    el.nativeElement.style.color = '#e35e6b'
  }

}

@Directive({
  selector: '[PintarDeRosa]'
})
export class PinkDirective {

  constructor(private el: ElementRef) {

    el.nativeElement.style.color = '#f100b6'
  }

}
