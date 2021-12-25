class LocalStorage {
	localStorageInstance: any;

	constructor(localStorageInstance: any) {
		this.localStorageInstance = localStorageInstance;
	}

	setItem(key: string, value: any) {
		if (this.localStorageInstance) {
			this.localStorageInstance.setItem(key, value);
		}
	}

	getItem(key: string) {
		if (!this.localStorageInstance) {
			return undefined;
		}

		return this.localStorageInstance.getItem(key) || undefined;
	}

	removeItem(key: string) {
		if (this.localStorageInstance) {
			this.localStorageInstance.removeItem(key);
		}
	}

	clear() {
		if (this.localStorageInstance) {
			this.localStorageInstance.clear();
		}
	}
}

export default new LocalStorage(
	typeof window === 'undefined' ? undefined : window.localStorage
);
