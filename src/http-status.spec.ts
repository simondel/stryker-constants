/**
 * Http Status Constants test file
 */
import { HTTP_STATUS, HTTP_STATUS_TEXT } from './http-status';

export interface IConstantsTestData {
	Text:string;
	Value:{};
	Expected:{};
}

describe('HTTP_STATUS', () => {

	it('should be defined', () => {
		expect(HTTP_STATUS).toBeDefined();
		expect(HTTP_STATUS).not.toBeNull();
	});

	describe('Http Status Codes', () => {
		const TestData:ITestData[] = [
			{ Text: 'Ok', Value: HTTP_STATUS.OK, Expected: 200 },
			{ Text: 'Created', Value: HTTP_STATUS.CREATED, Expected: 201 },
			{ Text: 'Accepted', Value: HTTP_STATUS.ACCEPTED, Expected: 202 },
			{ Text: 'Ok Range Start', Value: HTTP_STATUS.OK_RANGE_START, Expected: 200 },
			{ Text: 'Ok Range End', Value: HTTP_STATUS.OK_RANGE_END, Expected: 299 },
			{ Text: 'Bad Request', Value: HTTP_STATUS.BAD_REQUEST, Expected: 400 },
			{ Text: 'Not Found', Value: HTTP_STATUS.NOT_FOUND, Expected: 404 },
			{ Text: 'Server Error', Value: HTTP_STATUS.SERVER_ERROR, Expected: 500 },
			{ Text: 'Gateway Timeout', Value: HTTP_STATUS.GATEWAY_TIMEOUT, Expected: 504 },

			{ Text: 'Ok Text', Value: HTTP_STATUS_TEXT.OK, Expected: 'OK' },
			{ Text: 'Created Text', Value: HTTP_STATUS_TEXT.CREATED, Expected: 'Created' },
			{ Text: 'Accepted Text', Value: HTTP_STATUS_TEXT.ACCEPTED, Expected: 'Accepted' },
			{ Text: 'Bad Request Text', Value: HTTP_STATUS_TEXT.BAD_REQUEST, Expected: 'Bad Request' },
			{ Text: 'Not Found Text', Value: HTTP_STATUS_TEXT.NOT_FOUND, Expected: 'Not Found' },
			{ Text: 'Server Error Text', Value: HTTP_STATUS_TEXT.SERVER_ERROR, Expected: 'Server Error' },
			{ Text: 'Gateway Timeout Text', Value: HTTP_STATUS_TEXT.GATEWAY_TIMEOUT, Expected: 'Gateway Timeout' },
			{ Text: 'Default Error Text', Value: HTTP_STATUS_TEXT.UNKNOWN_ERROR, Expected: 'Unknown Error' }
		];

		for (const OneTest of TestData) {
			it(`${OneTest.Text} should be '${OneTest.Expected}'`, () => {
				expect(OneTest.Value).toBeDefined();
				expect(OneTest.Value).toBe(OneTest.Expected);
			});
		}
	});
});
