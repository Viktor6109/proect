import React, { Component } from 'react';
import MenuGrid from './MenuGridView';
import * as API from '../../services/api';

export default class MenuGridContainer extends Component {
  state = { menu: [], loading: false, error: null };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const menu = await API.getAllMenuItems();
      this.setState({ menu, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getMenuItemById(id).then(item => {
      console.log(item);
    });
  };

  handleAddMenuItem = () => {
    const item = {
      name: `New name ${Date.now()}`,
      price: Math.random(),
      image:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
    };

    API.addMenuItem(item).then(newItem => {
      this.setState(state => ({
        menu: [...state.menu, newItem],
      }));
    });
  };

  render() {
    const { menu, loading, error } = this.state;
    return (
      <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        <MenuGrid
          items={menu}
          onShowMoreInfo={this.handleShowMoreInfo}
          // onDelete={this.handleDeleteItem}
        />
      </div>
    );
  }
}
