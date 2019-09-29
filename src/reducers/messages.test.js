import messages from './messages';
import { MESSAGES_FAILED_TO_LOAD, MESSAGES_LOADED, MESSAGES_LOADING } from '../action-creators/action-types';

describe('messages reducer', () => {
  const messagesPayload = [
    {
      id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
      userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
      timestamp: '2017-02-09T04:27:38Z',
    },
    {
      id: 'b03569ae-ccbf-4975-8040-4daba638b407',
      userId: '16373df5-da0a-4074-8295-f916b94269f4',
      message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
      timestamp: '2016-11-09T05:04:58Z',
    },
  ];

  it('should set messages when messages API loaded', () => {
    expect(
      messages([], {
        type: MESSAGES_LOADED,
        payload: messagesPayload,
      }).messages
    ).toEqual(messagesPayload);
  });

  it('should set loading false once messages API loaded', () => {
    expect(
      messages([], {
        type: MESSAGES_LOADED,
        payload: messagesPayload,
      }).loading
    ).toEqual(false);
  });

  it('should set loading when messages API Loading', () => {
    let expected = true;
    let actual = messages([], { type: MESSAGES_LOADING }).loading;
    expect(actual).toBe(expected);
  });

  it('should set error message and loading flag false when message api fails', () => {
    let actual = messages([], { type: MESSAGES_FAILED_TO_LOAD, error: 'Fail to Load' });
    expect(actual.error).toBe('Fail to Load');
    expect(actual.loading).toBe(false);
  });
});
