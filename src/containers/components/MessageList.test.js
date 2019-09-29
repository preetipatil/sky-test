import React from 'react';
import { shallow } from 'enzyme';
import MessageList from './MessageList';
import MessageItem from './MessageItem';

describe('MessageList ', () => {
  it('should render Message Item correctly', () => {
    const props = {
      messages: [
        {
          id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
          userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
          message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
          timestamp: '2017-02-09T04:27:38Z',
        },
      ],
      members: [
        {
          id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
          firstName: 'Albert',
          lastName: 'Rose',
          email: 'arosec@bbb.org',
          avatar: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
          ip: '20.79.231.223',
        },
      ],
    };
    const tree = shallow(<MessageList {...props} />);
    expect(tree).toMatchSnapshot();
    expect(tree.find('ul').length).toBe(1);
    expect(tree.containsAnyMatchingElements([<MessageItem />])).toEqual(true);
  });
});
