import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[backgroundImg]',
})
export class BackgroundImgDirective implements AfterViewInit {

    @Input() backgroundImg: string;

    constructor(public elm: ElementRef<HTMLElement>) {
    }

    ngAfterViewInit(): void {
        console.log('[BackgroundImg] It is working');
        this.elm.nativeElement.style.backgroundImage = `url('${this.backgroundImg}')`;

    }

}

