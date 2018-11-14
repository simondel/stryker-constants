/**
 * CONSTANTS test file
 */
import { NUMBERS } from './CONSTANTS';
export interface IConstantsTestData {
	Text:string;
	Value:{};
	Expected:{};
}

describe('CONSTANTS', () => {

	it('should be defined', () => {
		expect(NUMBERS).toBeDefined();
		expect(NUMBERS).not.toBeNull();
	});

	describe('Basic CONSTANTS numbers', () => {
		const TestData:IConstantsTestData[] = [
			{ Text: 'ZERO', Value: NUMBERS.ZERO, Expected: 0 },
			{ Text: 'ONE', Value: NUMBERS.ONE, Expected: 1 },
			{ Text: 'TWO', Value: NUMBERS.TWO, Expected: 2 },
			{ Text: 'THREE', Value: NUMBERS.THREE, Expected: 3 },
			{ Text: 'FOUR', Value: NUMBERS.FOUR, Expected: 4 },
			{ Text: 'FIVE', Value: NUMBERS.FIVE, Expected: 5 },
			{ Text: 'SIX', Value: NUMBERS.SIX, Expected: 6 },
			{ Text: 'SEVEN', Value: NUMBERS.SEVEN, Expected: 7 },
			{ Text: 'EIGHT', Value: NUMBERS.EIGHT, Expected: 8 },
			{ Text: 'NINE', Value: NUMBERS.NINE, Expected: 9 },
			{ Text: 'TEN', Value: NUMBERS.TEN, Expected: 10 },
			{ Text: 'ELEVEN', Value: NUMBERS.ELEVEN, Expected: 11 },
			{ Text: 'TWELVE', Value: NUMBERS.TWELVE, Expected: 12 },
			{ Text: 'THIRTEEN', Value: NUMBERS.THIRTEEN, Expected: 13 },
			{ Text: 'FOURTEEN', Value: NUMBERS.FOURTEEN, Expected: 14 },
			{ Text: 'FIFTEEN', Value: NUMBERS.FIFTEEN, Expected: 15 },
			{ Text: 'SIXTEEN', Value: NUMBERS.SIXTEEN, Expected: 16 },
			{ Text: 'SEVENTEEN', Value: NUMBERS.SEVENTEEN, Expected: 17 },
			{ Text: 'EIGHTEEN', Value: NUMBERS.EIGHTEEN, Expected: 18 },
			{ Text: 'NINETEEN', Value: NUMBERS.NINETEEN, Expected: 19 },
			{ Text: 'TWENTY', Value: NUMBERS.TWENTY, Expected: 20 },
			{ Text: 'THIRTY', Value: NUMBERS.THIRTY, Expected: 30 },
			{ Text: 'FORTY', Value: NUMBERS.FORTY, Expected: 40 },
			{ Text: 'FIFTY', Value: NUMBERS.FIFTY, Expected: 50 },
			{ Text: 'SIXTY', Value: NUMBERS.SIXTY, Expected: 60 },
			{ Text: 'SEVENTY', Value: NUMBERS.SEVENTY, Expected: 70 },
			{ Text: 'EIGHTY', Value: NUMBERS.EIGHTY, Expected: 80 },
			{ Text: 'NINETY', Value: NUMBERS.NINETY, Expected: 90 },
			{ Text: 'HUNDRED', Value: NUMBERS.HUNDRED, Expected: 100 }
		];

		for (const OneTest of TestData) {
			it(OneTest.Text + ' should be correct', () => {
				expect(OneTest.Value).toBeDefined();
				expect(OneTest.Value).toBe(OneTest.Expected);
			});
		}
	});

	describe('Date CONSTANTS', () => {
		it('Start/End Date should be correct', () => {
			expect(NUMBERS.START_YEAR).toBeDefined();
			expect(NUMBERS.END_YEAR).toBeDefined();
			expect(NUMBERS.START_YEAR).toBe(20000101);
			expect(NUMBERS.END_YEAR).toBe(20991231);
		});

		it('Start/End Time should be correct', () => {
			expect(NUMBERS.START_TIME).toBeDefined();
			expect(NUMBERS.END_TIME).toBeDefined();
			expect(NUMBERS.START_TIME).toBe(1);
			expect(NUMBERS.END_TIME).toBe(240000);
		});
	});

	describe('Special CONSTANTS', () => {
		it('Negative Unary operator should work', () => {
			expect(-NUMBERS.ONE).toBe(-1);
		});
	});
});
