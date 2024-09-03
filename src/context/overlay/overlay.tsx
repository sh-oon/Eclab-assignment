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
        <div className='fixed top-[55px] left-0 w-full h-[calc(100% - 55px)] z-[1000]'>
          <div onClick={hideOverlay} className='fixed w-full h-full bg-[#3B3A48] bg-opacity-60 blur-[10px]' />
          <div className='z-[1001]'>
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


const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 16px;
  box-sizing: border-box;
  z-index: 1001;
  animation: ${slideBottom} 0.3s ease;
`;
