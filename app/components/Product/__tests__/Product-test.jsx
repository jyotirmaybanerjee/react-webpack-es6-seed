import React from 'react/addons';
import Product from '../Product.js';
import { expect } from 'chai';

let { TestUtils } = React.addons;

describe('Product', () => {
  it('Should have the correct css class', () => {
    let productMain = TestUtils.renderIntoDocument(
      <Product />
    );
    let productElem = React.findDOMNode(productMain);
    expect(productElem.className).to.equal('product-main');
  });
});
