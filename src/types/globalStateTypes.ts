import { Dispatch } from 'react';
import { LinkType } from "./linkTypes";
import { ModalType } from './modalTypes';
import { ToastType } from './toastTypes';

export type ActionType = {
    type: string;
    payload?: any;
};

export interface GlobalStateInterface {
    orderBy: null | string;
    links: LinkType[];
    modal: any | ModalType;
    toast: any | ToastType;
}

export type ContextType = {
    globalState: GlobalStateInterface;
    dispatch: Dispatch<ActionType>;
};