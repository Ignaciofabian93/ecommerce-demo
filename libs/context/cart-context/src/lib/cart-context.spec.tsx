import { render } from '@testing-library/react';

import CartContext from './cart-context';

describe('CartContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartContext />);
    expect(baseElement).toBeTruthy();
  });
});
