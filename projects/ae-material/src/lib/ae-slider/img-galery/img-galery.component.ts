import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'img-galery',
  templateUrl: './img-galery.component.html',
  styleUrls: ['./img-galery.component.css']
})
export class ImgGaleryComponent implements OnInit {

  public currentImg = '';

  @ViewChild('imgElement') imgElement: ElementRef<HTMLImageElement>;

  @Input() input: {
    images: { src: string }[]
  } = {
      images: [
        { src: 'https://hbr.org/resources/images/article_assets/2019/11/Nov19_14_sb10067951dd-001.jpg' },
        { src: 'https://hbr.org/resources/images/article_assets/2020/04/Apr20_07_1162572100.jpg' },
        { src: 'https://www.marketingtutor.net/wp-content/uploads/2018/06/what-is-a-product.jpg' },
      ]
    };


  constructor() { }

  ngOnInit(): void {
  }

  public imageAniamtionInterval;
  public imageOpacity: number = 1;
  setCurrentImg(url: string): void {
    this.imageOpacity = 0;
    setTimeout(() => {
      this.imageOpacity = 1;
      this.currentImg = url;
    }, 500);

  }




}
