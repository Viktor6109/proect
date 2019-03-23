import React, { Component } from 'react';
// import MenuGridContainer from './MenuGridContainer';
import MenuItemView from './MenuItemView';
import * as API from '../../services/api';

// getMenuItemById

export default class MenuItemContainer extends Component {
  state = {
    id: null,
    name: null,
    image: null,
    description: null,
    ingredients: null,
    price: null,
  };

  componentDidMount() {
    const { id } = this.props;
    API.getMenuItemById(id).then(item => this.setState({ ...item }));
  }

  render() {
    const { id, name, image, description, ingredients, price } = this.state;

    return (
      <MenuItemView
        id={id}
        name={name}
        image={image}
        description={description}
        ingredients={ingredients}
        price={price}
      />
    );
  }
}
