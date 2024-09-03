'use client'

import React, {createContext, ReactNode, useCallback, useContext, useReducer} from 'react';
import {IOverlayState, TOverlayAction, TOverlayContext} from "@order/context/overlay/overlay.types";


// 초기 상태 정의
const initialState: IOverlayState = {
  isVisible: false,
  content: null,
};

// Context 생성
const OverlayContext = createContext<TOverlayContext | undefined>(undefined);

// 리듀서 정의
const overlayReducer = (state: IOverlayState, action: TOverlayAction): IOverlayState => {
  switch (action.type) {
    case 'OPEN_OVERLAY':
      return {isVisible: true, content: action.content};
    case "CLOSE_ANIMATION":
      return {isVisible: false, content: state.content};
    case 'CLOSE_OVERLAY':
      return {isVisible: false, content: null};
    default:
      return state;
  }
};

export const OverlayProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const [state, dispatch] = useReducer(overlayReducer, initialState);

  const showOverlay = useCallback((content: ReactNode) => {
    dispatch({type: 'OPEN_OVERLAY', content});
  }, []);

  const hideOverlay = useCallback(() => {
    dispatch({type: 'CLOSE_ANIMATION'});
    setTimeout(() => {
      dispatch({type: 'CLOSE_OVERLAY'});
    }, 300);
  }, []);

  return (
    <OverlayContext.Provider value={{...state, showOverlay, hideOverlay}}>
      {children}
      {state.isVisible && (
        <div className='overlay-container'>
          <div onClick={hideOverlay} className='overlay-bg' />
          <div className='overlay-content'>
            {state.content}
          </div>
        </div>
      )}
    </OverlayContext.Provider>
  );
};

export const useOverlay = (): TOverlayContext => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within an OverlayProvider");
  }
  return context;
};

