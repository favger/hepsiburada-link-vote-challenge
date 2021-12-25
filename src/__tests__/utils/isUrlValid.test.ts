import { isUrlValid } from '../../utils';

describe('test "isUrlValid" helper', () => {
	it('should url valid', () => {
		expect(isUrlValid('https://hepsiburada.com')).toBeTruthy();
		expect(
			isUrlValid('http://hepsiburada.com/s1/s2/s3?a=1&b=2&c=3#anchor')
		).toBeTruthy();
	});

	it('should url not valid', () => {
		expect(isUrlValid('hepsiburada')).toBeFalsy();
		expect(isUrlValid('https://hepsiburada')).toBeFalsy();
		expect(isUrlValid(null)).toBeFalsy();
	});
});
