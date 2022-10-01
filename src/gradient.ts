import { handleAllErrors } from "./error";
import gradient from 'gradient-string';
import boxen from 'boxen';
import stripAnsi from 'strip-ansi';

export function gradientBox(boxText:string, boxOptions: {}, gradientOptions: string | {}) {
	handleAllErrors(boxText, boxOptions, gradientOptions);

	if (typeof gradientOptions === 'string') {
        //@ts-ignore
		const box = gradient[gradientOptions].multiline(
			stripAnsi(boxen(boxText, boxOptions))
		);

		return `${box}\u001b[0m`;
	}
	if (gradientOptions instanceof Array) {
		const box = gradient([...gradientOptions]).multiline(
			stripAnsi(boxen(boxText, boxOptions))
		);

		return `${box}\u001b[0m`;
	}

	return '';
}