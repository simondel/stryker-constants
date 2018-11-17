/**
 * Constant definions
 */
export enum NUMBERS {
	ZERO = 0, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, ELEVEN, TWELVE, THIRTEEN, FOURTEEN, FIFTEEN, SIXTEEN, SEVENTEEN, EIGHTEEN, NINETEEN, TWENTY,
	THIRTY = 30, FORTY = 40, FIFTY = 50, SIXTY = 60, SEVENTY = 70, EIGHTY = 80, NINETY = 90, HUNDRED = 100,
	START_YEAR = 20000101, END_YEAR = 20991231,
	START_TIME = 1, END_TIME = 240000
}

export namespace HTTP_STATUS {
	export const OK:string = 'OK';
	export const BAD_REQUEST:string = 'Bad Request';
	export const NOT_FOUND:string = 'Not Found';
	export const SERVER_ERROR:string = 'Server Error';
	export const GATEWAY_TIMEOUT:string = 'Gateway Timeout';

}