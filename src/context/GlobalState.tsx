import React, { ReactNode, createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import { LocalStorage } from '../utils';
import { GlobalStateInterface, ContextType } from '../types/globalStateTypes';
import initialLinks from '../constants/initialLinks';

// Initial State
const initialState: GlobalStateInterface = {
	orderBy: null,
	links: initialLinks,
	modal: null,
	toast: null,
};

// Create Context
export const GlobalContext = createContext({} as ContextType);

// Provider Component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
	const [globalState, dispatch] = useReducer(AppReducer, initializeState());

	useEffect(() => {
		LocalStorage.setItem(
			'globalState',
			JSON.stringify({
				orderBy: globalState.orderBy,
				links: globalState.links,
			})
		);
	}, [globalState]);

	return (
		<GlobalContext.Provider
			value={{
				globalState,
				dispatch,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

function initializeState() {
	try {
		const localStorageState = JSON.parse(
			LocalStorage.getItem('globalState') as string
		);
		return localStorageState;
	} catch (err) {
		return initialState;
	}
}
