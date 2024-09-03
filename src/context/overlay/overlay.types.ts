import {ReactNode} from "react";

export interface IOverlayState {
  isVisible: boolean;
  content: React.ReactNode | null;
}

export type TOverlayAction =
  | { type: 'OPEN_OVERLAY'; content: React.ReactNode }
  | { type: 'CLOSE_ANIMATION' }
  | { type: 'CLOSE_OVERLAY' };

export type TOverlayContext = {
  showOverlay: (content: ReactNode) => void;
  hideOverlay: () => void;
  isVisible: boolean;
  content: ReactNode | null;
}
