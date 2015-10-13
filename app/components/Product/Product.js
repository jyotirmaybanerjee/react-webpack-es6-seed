import React from 'react';
import './Product.less';

class Product extends React.Component {

  propTypes: {
    app: React.PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  onChange(state) {

    this.setState(state);
  }

  render() {

    document.title = 'App Products';

    return (
      <div className={'product-main'}>
        <h1> Products </h1>
      </div>
    );
  }
}

module.exports = Product;
