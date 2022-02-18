import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'num-rows'
})
export class NumRowsPipe implements PipeTransform {

  transform(items: any, filter: any, defaultFilter: boolean): any {
    
  }

}
