import React from 'react';
import { shallow } from 'enzyme';

import Home, { Loading, Error } from './home';
import MessageList from './components/MessageList';

describe('Home Page Test', () => {
  it('should renders messageList correctly', () => {
    const props = {
      messages: { loading: false, messages: [], error: null },
      members: { loading: false, members: [], error: null },
      loadMessages: () => {},
      loadMembers: () => {},
    };

    const tree = shallow(<Home.WrappedComponent {...props} />);
    expect(tree.containsAnyMatchingElements([<MessageList />])).toEqual(true);
    //expect(tree).toMatchSnapshot();
  });

  it('should match messageList snapshot correctly', () => {
    const props = {
      messages: { loading: false, messages: [], error: null },
      members: { loading: false, members: [], error: null },
      loadMessages: () => {},
      loadMembers: () => {},
    };

    const tree = shallow(<Home.WrappedComponent {...props} />);
    expect(tree.containsAnyMatchingElements([<MessageList />])).toEqual(true);
    expect(tree).toMatchSnapshot();
  });

  it('should show LOADING when Api is loading', () => {
    const props = {
      messages: { loading: true, messages: [], error: null },
      members: { loading: true, members: [], error: null },
      loadMessages: () => {},
      loadMembers: () => {},
    };

    const wrapper = shallow(<Home.WrappedComponent {...props} />);
    expect(wrapper.contains(<Loading />)).toEqual(true);
    //expect(wrapper).toMatchSnapshot();
  });

  it('should show ERROR IN LOADING DATA when Api is failed to load', () => {
    const props = {
      messages: { loading: false, messages: [], error: 'Failed' },
      members: { loading: false, members: [], error: null },
      loadMessages: () => {},
      loadMembers: () => {},
    };

    const tree = shallow(<Home.WrappedComponent {...props} />);
    expect(tree.contains(<Error />)).toEqual(true);
    //expect(wrapper).toMatchSnapshot();
  });
});
