import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition, animated, config } from 'react-spring';

import Portal from 'containers/Portal';
import Icon from 'components/Icon';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        <Transition
          native
          config={config.wobbly}
          items={on}
          from={{ opacity: 0, bgOpacity: 0, y: -50 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: 50 }}
        >
          {(on) =>
            on &&
            ((props) => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    transform: props.y.interpolate((y) => `translate3d(0, ${y}px, 0)`),
                    ...props
                  }}
                >
                  <CloseButton onClick={toggle}>
                    <Icon name="close" iconColor="blue" borderColor="blue" />
                  </CloseButton>
                  {children}
                </ModalCard>
                <Background
                  onClick={toggle}
                  style={{ opacity: props.bgOpacity.interpolate((bgOpacity) => bgOpacity) }}
                />
              </ModalWrapper>
            ))
          }
        </Transition>
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(animated.div)`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 45px 10px 10px 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
  min-width: 320px;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  outline: none;
  padding: 0;
  border: none;
`;

const Background = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
