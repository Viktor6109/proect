import React, { Component, createRef } from 'react';
import Avatar from '../Avatar/Avatar';
import DropOpen from './DropOpen/DropOpen';
import s from './UserMenu.module.css';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = { isDropdownOpen: false };

  componentWillMount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;
    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    // console.log(isTargetInsideContainer);

    const { isDropdownOpen } = this.state;
    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
    console.log(this.state);
  };

  toggleDidDropdown = () => {
    this.setState({ isDropdownOpen: false });
    console.log(this.state);
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { name, avatar } = this.props;
    return (
      <div
        className={s.container}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        <Avatar image={avatar} width={100} height={100} />
        <span className={s.menu}>{name}</span>
        {isDropdownOpen && <DropOpen onClose={this.toggleDidDropdown} />}
      </div>
    );
  }
}
