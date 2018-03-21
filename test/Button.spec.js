import React from 'react';
import {shallow} from 'enzyme';
import Button from '../src/Button';

describe('Button', () => {
  describe('Default', () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow((
      <Button onClick={onButtonClick} className="test">按钮</Button>
    ));

    it('should generate a button element', () => {
      expect(wrapper.type()).toBe('button');
    });

    it('should contain the label passed to it', () => {
      expect(wrapper.text()).toBe('按钮');
    });

    it('should have type=button by default', () => {
      expect(wrapper.prop('type')).toBe('button');
    });

    it('should have class', () => {
      expect(wrapper.hasClass('rc-btn test')).toBeTruthy();
    });

    it('simulates click events', () => {
      wrapper.simulate('click');
      expect(onButtonClick).toBeCalled();
    });
  });

  it('should show the type if passed button or submit', () => {
    const wrapper1 = shallow((
      <Button htmlType='submit'>
        submit
      </Button>
      )),
      wrapper2 = shallow((
        <Button htmlType='reset'>
          reset
        </Button>
      ));
    expect(wrapper1.prop('type')).toBe('submit');
    expect(wrapper2.prop('type')).toBe('reset');
  });

  it('should be disabled if set disabled', () => {
    const wrapper1 = shallow(
      <Button disabled>
        Button
      </Button>
    );
    expect(wrapper1.prop('disabled')).toBeTruthy();
  });
});