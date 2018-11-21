/**
 * HTTP Status Codes
 */
export namespace HTTP_STATUS {
	export const OK:number = 200;
	export const CREATED:number = 201;
	export const ACCEPTED:number = 202;
	export const OK_RANGE_START:number = 200;
	export const OK_RANGE_END:number = 299;
	export const BAD_REQUEST:number = 400;
	export const NOT_FOUND:number = 404;
	export const SERVER_ERROR:number = 500;
	export const GATEWAY_TIMEOUT:number = 504;
}

export namespace HTTP_STATUS_TEXT {
	export const OK:string = 'OK';
	export const CREATED:string = 'Created';
	export const ACCEPTED:string = 'Accepted';
	export const BAD_REQUEST:string = 'Bad Request';
	export const NOT_FOUND:string = 'Not Found';
	export const SERVER_ERROR:string = 'Server Error';
	export const GATEWAY_TIMEOUT:string = 'Gateway Timeout';
	export const UNKNOWN_ERROR:string = 'Unknown Error';
}
