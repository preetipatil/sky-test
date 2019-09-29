import { MEMBERS_LOADING, MEMBERS_LOADED, MEMBERS_FAILED_TO_LOAD } from '../action-creators/action-types';

import members from './members';

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

describe('Member reducer', () => {
  it('should set loading flag when Members API loading ', () => {
    const result = members([], { type: MEMBERS_LOADING });
    expect(result.loading).toBe(true);
  });

  it('should set error and loading flag false when members API Fail to load', () => {
    const result = members([], { type: MEMBERS_FAILED_TO_LOAD, error: 'Failed To Load Members' });
    expect(result.error).toBe('Failed To Load Members');
    expect(result.loading).toBe(false);
  });

  it('should load members when members API is loaded suceessfully', () => {
    const result = members([], { type: MEMBERS_LOADED, payload: dataMembers });
    expect(result.members).toEqual(dataMembers);
    expect(result.loading).toBe(false);
  });
});
