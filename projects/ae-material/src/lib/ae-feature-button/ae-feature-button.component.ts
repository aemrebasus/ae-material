import { Component, Input, OnInit } from '@angular/core';
import { IconType } from '../common/IconType';

type ButtonType = 'Image Button' | 'Icon Button' | 'Impact Button' | 'Promotion Button' | 'Danger Button';

export interface AeFeatureButton {
  buttonType: ButtonType;
  rotate?: number;
  value?: string;
  icon?: IconType;
  imgSrc?: string;
  tooltip?: string;
  action: () => void;
}


const imgUrl = {
  fiveCar: 'https://img.pngio.com/new-car-png-all-new-cars-png-transparent-png-1484x366-new-cars-png-840_247.png',
  threeCar: 'https://www.pngkey.com/png/detail/100-1008408_luxury-cars-png-jpg-black-and-white-luxury.png',
  classicCar: 'https://www.pikpng.com/pngl/m/303-3030159_classic-car-restoration-shop-torque-classic-cars-png.png',
  serviceMan: 'https://www.pinclipart.com/picdir/middle/331-3312479_electrical-service-electrician-clipart-png-transparent-png.png',
  confusedMan: 'https://www.clipartmax.com/png/middle/164-1648519_nos-services-confused-man-icon.png',
  shoe: 'https://www.pngkit.com/png/full/53-536595_nike-running-shoes-png-nike-tennis-shoes-volt.png'
};


const sampleFeatureButton: AeFeatureButton = {
  action: () => '',
  rotate: 30,
  buttonType: 'Impact Button',
  value: 'Most Atractive Button',
  imgSrc: imgUrl.shoe,
  tooltip: 'Atractive Button'
};

@Component({
  selector: 'ae-feature-button',
  templateUrl: './ae-feature-button.component.html',
  styleUrls: ['./ae-feature-button.component.css']
})
export class AeFeatureButtonComponent implements OnInit {

  @Input() input: AeFeatureButton = sampleFeatureButton;

  constructor() { }

  ngOnInit(): void {
  }

}
