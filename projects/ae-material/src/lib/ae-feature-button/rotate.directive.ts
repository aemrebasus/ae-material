import { AfterViewChecked, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[aeRotate]',
})
export class AeRotateDirective implements AfterViewChecked {
    @Input() aeRotate: number;

    constructor(public elementRef: ElementRef<HTMLImageElement>) {

    }
    ngAfterViewChecked(): void {
        this.elementRef.nativeElement.style.transform = `rotate(${this.aeRotate}deg)`;
    }
}

