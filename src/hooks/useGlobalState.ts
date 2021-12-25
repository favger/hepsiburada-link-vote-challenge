import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function useGlobalState() {
	const context = useContext(GlobalContext);
	return context;
}

export default useGlobalState;
