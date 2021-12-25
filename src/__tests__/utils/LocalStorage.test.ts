import { LocalStorage } from '../../utils';

describe('test "LocalStorage" helper', () => {
	it('should be able to add something to the localstore', () => {
		const key = 'key';
		LocalStorage.setItem(key, 'value');
		expect(LocalStorage.getItem(key)).toEqual('value');
	});

	it('should be able to get something to the localstore', () => {
		const key = 'key';
		expect(LocalStorage.getItem(key)).toEqual('value');
	});

	it('should be able to delete something to the localstore', () => {
		const key = 'key';
		LocalStorage.removeItem(key);
		expect(LocalStorage.getItem(key)).toBeUndefined();
	});
});
