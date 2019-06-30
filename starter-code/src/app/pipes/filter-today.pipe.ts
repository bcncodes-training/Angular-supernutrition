import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterToday',
  pure:false
})
export class FilterTodayPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
    return items.filter(it => it.quantity>0);
  }


}
