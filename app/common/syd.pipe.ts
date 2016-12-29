import { Pipe, PipeTransform } from '@angular/core';
import { ConstService } from '../service/const.service'
import './const'

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({ name: 'orderStatusLabel' })
export class OrderStatusLabelPipe implements PipeTransform {

	transform(value: number): number {
		let a = orderStatusLabel[value];
		return a ? a : value;
	}
}