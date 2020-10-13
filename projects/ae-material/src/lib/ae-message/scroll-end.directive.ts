import { AfterViewChecked, AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[scrollTo]',
})
export class ScrollToDirective implements AfterViewChecked {
    @Input() scrollTo: number;
    constructor(public ref: ElementRef<HTMLElement>) {
    }
    ngAfterViewChecked(): void {
        this.ref.nativeElement.scrollTo({
            behavior: 'smooth',
            top: this.scrollTo
        });
    }

}

