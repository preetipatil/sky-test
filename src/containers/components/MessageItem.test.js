import React from 'react';
import { shallow } from 'enzyme';
import MessageItem from './MessageItem';

describe('Message Items ', () => {
  it('Should render each message Item details', () => {
    const props = {
      chatMessage: 'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      email: 'wgonzalezz@va.gov',
      avatar: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
      timestamp: '2017-02-11T01:06:40Z',
    };

    const tree = shallow(<MessageItem {...props} />);
    expect(tree).toMatchSnapshot();
    expect(tree.find('li').length).toBe(1);
    //expect(tree.find('li').at(2)).toBe('');
  });
});
