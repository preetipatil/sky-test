import { sortByDate, findUserDetails } from './index';

const dataMessages = [
  {
    id: '3a59859e-33f1-4c2b-a636-1f119c484dc8',
    userId: '976c4919-a8b4-4807-bebb-84ca8448be32',
    message: 'Suspendisse potenti.',
    timestamp: '2016-06-03T20:24:29Z',
  },
  {
    id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    timestamp: '2017-02-09T04:27:38Z',
  },
];

const dataMembers = [
  {
    id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
    firstName: 'Martin',
    lastName: 'Bradley',
    email: 'mbradley0@google.it',
    avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    ip: '166.124.172.160',
  },
  {
    id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    firstName: 'Helen',
    lastName: 'Hawkins',
    email: 'hhawkins1@posterous.com',
    avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
    ip: '179.239.189.173',
  },
  {
    id: 'ba5ebb2f-2dbd-44d4-911b-f15c2d792871',
    firstName: 'Denise',
    lastName: 'Sanders',
    email: 'dsanders2@ox.ac.uk',
    avatar: 'http://dummyimage.com/100x100.jpg/ff4444/ffffff',
    ip: '184.19.42.78',
  },
];

describe('Utils Functions', () => {
  it('should sort messages by timestamp', () => {
    const expected = [
      {
        id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
        userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
        message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
        timestamp: '2017-02-09T04:27:38Z',
      },
      {
        id: '3a59859e-33f1-4c2b-a636-1f119c484dc8',
        userId: '976c4919-a8b4-4807-bebb-84ca8448be32',
        message: 'Suspendisse potenti.',
        timestamp: '2016-06-03T20:24:29Z',
      },
    ];

    const actual = sortByDate(dataMessages);
    expect(actual).toEqual(expected);
  });

  it('should find details of the provided valid user Id', () => {
    const expected = {
      id: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
      firstName: 'Helen',
      lastName: 'Hawkins',
      email: 'hhawkins1@posterous.com',
      avatar: 'http://dummyimage.com/100x100.jpg/dddddd/000000',
      ip: '179.239.189.173',
    };
    const userId = 'fe27b760-a915-475c-80bb-7cdf14cc6ef3';
    const result = findUserDetails(dataMembers, userId);
    expect(result).toEqual(expected);
  });

  it('should return default userdetails if User qith given UserId not found', () => {
    const expected = {
      id: '',
      firstName: 'Unknown',
      lastName: 'Unknown',
      email: 'unknown email',
      avatar: 'NO IMAGE',
      ip: '0.0.0.0',
    };
    const result = findUserDetails(dataMembers, '');
    expect(result).toEqual(expected);
  });
});
