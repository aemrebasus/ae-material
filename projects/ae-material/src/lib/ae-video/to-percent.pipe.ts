import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toPercent' })
export class ToPercentPipe implements PipeTransform {
    transform(value: any): any {
        return value + '%';
    }
}
