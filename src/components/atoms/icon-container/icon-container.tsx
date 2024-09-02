import {PropsWithChildren} from "react";

export type IconContainerProps = {
  size?: 'small' | 'medium' | 'large';
};

export const IconContainer = ({}: PropsWithChildren<IconContainerProps>) => {
  return (
    <div>
      <svg>
        {/* Icon */}
      </svg>
    </div>
  )
}
