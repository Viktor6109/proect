import React, { Component } from 'react';
import AppHeader from './AppHeader/AppHeader';
import Modal from './Model/Model';

export default class App extends Component {
  state = { isModalOpen: false };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={this.closeModal} />}
      </div>
    );
  }
}
