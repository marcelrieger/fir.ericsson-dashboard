import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({name: 'floor'})
export class FloorPipe implements PipeTransform {
  transform(value: any): number {
    return parseInt(value);
  }
}