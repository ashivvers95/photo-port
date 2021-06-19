import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
      render(<ContactForm/>);
    })
  
    it('matches snapshot', () => {
      const { asFragment } = render(<ContactForm/>);
  
      expect(asFragment()).toMatchSnapshot();
    });
  })

  describe('Contact Me is visible', () => {
    it('Contact Me is present on h1', () => {
      const { getByLabelText } = render(<ContactForm/>);
  
      expect(getByLabelText('data-testid')).toHaveTextContent('Contact Me');
    });
  })