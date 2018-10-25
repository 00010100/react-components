import React, { Component, Fragment } from 'react';

import Toggle from 'components/Toggle';
import Modal from 'components/Modal';

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        <p>test</p>
        
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button onClick={toggle}>Open</button>
              <Modal on={on} toggle={toggle}>
                <h1>modal</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
        
      </div>
    );
  }
}
