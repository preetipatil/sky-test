import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadMessages } from '../action-creators/messages';
import { loadMembers } from '../action-creators/members';
import MessageList from './components/MessageList';

export function Loading() {
  return <h1>LOADING</h1>;
}

export function Error() {
  return <h1>ERROR IN LOADING DATA</h1>;
}

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
    this.props.loadMembers();
  }

  render() {
    const { messages, members } = this.props;
    const { messages: posts, error: messageError, loading: messageLoading } = messages;
    const { members: users, error: memberError, loading: memberLoading } = members;

    if (messageLoading || memberLoading) {
      return <Loading />;
    } else if (memberError === null && messageError === null) {
      return <MessageList members={users} messages={posts} />;
    } else {
      return <Error />;
    }
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  members: state.members,
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadMessages, loadMembers }, dispatch);

Home.propTypes = {
  loadMessages: PropTypes.func,
  loadMembers: PropTypes.func,
  messages: PropTypes.object,
  members: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
