import React, { Component, createRef } from 'react';
import Avatar from '../Avatar/Avatar';
import Dropdown from './Dropdown/Dropdown';
import s from './UserMenu.module.css';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = { isDropdownOpen: false };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;
    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isDropdownOpen } = this.state;

    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
    console.log(this.state);
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
    // console.log(this.state);
    // console.log(this.setState);
  };

  // toggleDidDropdown = () => {
  //   this.setState({ isDropdownOpen: false });
  //   // console.log(this.state);
  //   // console.log(this.setState);
  // };

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
        {isDropdownOpen && <Dropdown onClose={this.closeDropdown} />}
      </div>
    );
  }
}
