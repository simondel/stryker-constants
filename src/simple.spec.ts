/**
 * Simple test file
 */
import { GetBoolean } from './simple';

describe('GetBoolean', () => {

	it('should be true', () => {
		expect(GetBoolean(true)).toBeTruthy();
	});
});
