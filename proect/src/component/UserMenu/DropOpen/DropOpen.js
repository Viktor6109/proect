import React, { Component } from 'react';
import s from './DropOpen.module.css';

export default class DropOpen extends Component {
  state = {};

  // closeDrop = () => {
  //   this.setState({ isDropdownOpen: false });
  // };

  render() {
    const { onClose } = this.props;
    return (
      <div className={s.container}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Earum, maiores.
        <button type="button" onClick={onClose}>
          Login
        </button>
      </div>
    );
  }
}
