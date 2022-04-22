import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    let dateOut = moment.isMoment = moment(date,'YYYY-MM-DDTHH')
    return dateOut.format('DD-MM-YYYY');
  }

}
