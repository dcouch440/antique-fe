import React, { ReactNode } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

// hiding horizontal scrollbar
const StyledScrollbars = styled(Scrollbars)`
  height: inherit;
  width: inherit;
  position: inherit;
  display: inherit;
  flex: inherit;
  scrollbar-width: none;
`;

const VerticalThumb = styled.div`
  width: 4px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: #767676;
`;

const VerticalTrack = styled.div`
  right: 2px;
  bottom: 2px;
  top: 2px;
  width: 5px;
`;

interface IScrollContainer {
  children: ReactNode;
  style?: React.CSSProperties | undefined;
}

// a container that uses react-custom-scrollbars library to emulate mobile like scrollbars.
export default function ScrollContainer({
  children,
  style,
  ...props
}: IScrollContainer): JSX.Element {
  return (
    <StyledScrollbars
      renderThumbVertical={(props) => <VerticalThumb {...props} />}
      renderTrackVertical={(props) => <VerticalTrack {...props} />}
      autoHide
      hidden
      style={style}
      {...props}
    >
      {children}
    </StyledScrollbars>
  );
}
