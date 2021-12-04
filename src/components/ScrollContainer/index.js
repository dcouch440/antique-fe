import PropTypes from 'prop-types';
import React from 'react';
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
  display: ${({ hideScrollBar }) => (hideScrollBar ? 'none' : 'initial')};
`;

const VerticalTrack = styled.div`
  right: 2px;
  bottom: 2px;
  top: 2px;
  width: 5px;
  display: ${({ hideScrollBar }) => (hideScrollBar ? 'none' : 'initial')};
`;

// a container that uses react-custom-scrollbars library to emulate mobile like scrollbars.
export default function ScrollContainer({ style, children, hideScrollBar }) {
  return (
    <StyledScrollbars
      renderThumbVertical={(props) => (
        <VerticalThumb hideScrollBar={hideScrollBar} {...props} />
      )}
      renderTrackVertical={(props) => (
        <VerticalTrack hideScrollBar={hideScrollBar} {...props} />
      )}
      autoHide
      hidden
      style={style}
    >
      {children}
    </StyledScrollbars>
  );
}

ScrollContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  hideScrollBar: PropTypes.bool,
  style: PropTypes.object,
};
