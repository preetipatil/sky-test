export function sortByDate(messages) {
  return messages.sort(function(a, b) {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
}

const unknownUser = userId => {
  return {
    id: userId,
    firstName: 'Unknown',
    lastName: 'Unknown',
    email: 'unknown email',
    avatar: 'NO IMAGE',
    ip: '0.0.0.0',
  };
};

export function findUserDetails(members, userId) {
  return members.find(memeber => memeber.id === userId) || unknownUser(userId);
}
