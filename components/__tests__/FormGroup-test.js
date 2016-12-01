import React from 'react';
import FormGroup from '../FormGroup';
import { shallow } from 'enzyme';

describe('FormGroup', () => {
  describe('Renders as expected', () => {
    const wrapper = shallow(
      <FormGroup className="extra-class" />
    );

    it('renders children as expected', () => {
      expect(wrapper.find('.child').length).toBe(0);
    });
    it('renders wrapper as expected', () => {
      expect(wrapper.length).toBe(1);
    });
    it('has the expected classes', () => {
      expect(wrapper.hasClass('bx--form__fieldset')).toEqual(true);
    });
    it('renders extra classes passed in via className', () => {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('should render wrapper as expected', () => {
      const formGroup = shallow(
        <FormGroup>
          <div className="test-child1"></div>
          <div className="test-child2"></div>
        </FormGroup>
      );
      expect(formGroup.length).toEqual(1);
    });
    it('should render children as expected', () => {
      const formGroup1 = shallow(
        <FormGroup>
          <div className="test-child"></div>
          <div className="test-child"></div>
        </FormGroup>
      );
      expect(formGroup1.find('.test-child').length).toBe(2);
    });
  });
});
