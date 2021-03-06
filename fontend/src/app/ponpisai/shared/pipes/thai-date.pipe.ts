import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
const Moment = moment;

@Pipe({
  name: 'thaiDate'
})
export class ThaiDatePipe implements PipeTransform {

  transform(value: string, format: string, convertedFormat: string): any {
    if (!Moment(value, format).isValid()) {
      return '';
    }

    const thaiDate = Moment(value, format);
    thaiDate.locale('th');
    return thaiDate.format(convertedFormat);
  }
}
