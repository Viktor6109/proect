import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import userNavItems from '../../../../configs/user-nav';

import s from './Dropdown.module.css';

export default class Dropdown extends Component {
  state = {};

  render() {
    const { onClose } = this.props;
    return (
      <div className={s.container}>
        <ul>
          {userNavItems.map(item => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button type="button" onClick={onClose}>
          Login
        </button>
      </div>
    );
  }
}
