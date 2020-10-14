import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[elementWidth]',
})
export class ElementWithDirective implements AfterViewInit {
    @Input() elementWidth: number;
    constructor(public ref: ElementRef) {

    }
    ngAfterViewInit(): void {
        this.ref.nativeElement.style.width = `${this.elementWidth}%`;
    }

}

