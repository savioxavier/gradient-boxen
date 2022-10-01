/* eslint-disable indent */
import { stripIndents } from 'common-tags';
import { gradientArray } from './constant';
export function handleAllErrors(boxText:string, boxOptions: {}, gradientOptions: string | {}) {
	if (typeof boxText !== 'string') {
		throw new Error('No box text provided');
	}

	if (!boxOptions) {
		throw new Error('No box options provided');
	}

	if (Object.prototype.toString.call(boxOptions) !== '[object Object]') {
		throw new Error('Box options must be an object');
	}

	if (!gradientOptions) {
		throw new Error('No gradient specified');
	}

	if (gradientOptions) {
		if (
			!(
				typeof gradientOptions === 'string' ||
				(Array.isArray(gradientOptions) &&
					gradientOptions.every(
						(gradientOption) => typeof gradientOption === 'string'
					))
			)
		) {
			throw new TypeError(
				stripIndents`Gradient must be a string or an array of valid color codes
        Received type: ${typeof gradientOptions}. Expected type: 'string' or 'array'`
			);
		}

		if (
			typeof gradientOptions === 'string' &&
			!gradientArray.includes(gradientOptions)
		) {
			throw new Error(
				stripIndents`Gradient name must be one of the following: ${gradientArray.join(
					', '
				)}. Received gradient name: '${gradientOptions}'`
			);
		}
	}
}
