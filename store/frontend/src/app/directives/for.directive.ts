import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  @Input('myForEm') numbers = []


  constructor(private container: ViewContainerRef) {}


  ngOnInit(): void{
    console.log(this.numbers)

  }

}

