import React, { Component } from 'react';
// import s from './Model.css';

export default class Modal extends Component {
  state = {};

  render() {
    const { onClose } = this.props;
    return (
      <div className="Backdrop">
        <div className="ModalWindow">
          <p>
            В современных браузерах у скриптов есть атрибуты async и defer,
            которые разрешают браузеру продолжать обработку страницы, но
            применить их здесь нельзя, так как рекламный скрипт захочет вызвать
            document.write именно на этом месте, и браузер не должен двигаться
            вперёд по документу.
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
