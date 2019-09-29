import React from 'react';
import MessageItem from './MessageItem';
import PropTypes from 'prop-types';
import { findUserDetails, sortByDate } from '../utils';

function NoMessages() {
  return <div>No messages found</div>;
}

class MessageList extends React.Component {
  renderMessageList({ messages, members }) {
    const posts = sortByDate(messages);
    const findUser = findUserDetails.bind(this, members || []);
    return (
      <ul>
        {posts.map(post => {
          let user = findUser(post.userId);
          return (
            <MessageItem
              key={post.id}
              chatMessage={post.message}
              email={user.email}
              avatar={user.avatar}
              timestamp={post.timestamp}
            />
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>LOADED</h1>
        {this.props.messages ? this.renderMessageList(this.props) : <NoMessages />}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.array,
  members: PropTypes.array,
};
export default MessageList;
