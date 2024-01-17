const users = [
  {
    name: 'Wendy',
    balance: 1000,
    friends: 'Pippa',
    skills: 'communication',
  },
  {
    name: 'Joanna',
    balance: 500,
    friends: 'Luna',
    skills: 'trust',
  },
  {
    name: 'Hamza',
    balance: 2000,
    friends: 'Herald',
    skills: 'communication',
  },
  {
    name: 'Kalya',
    balance: 1500,
    friends: 'Pippa',
    skills: 'empathy',
  },
  {
    name: 'Carly',
    balance: 3000,
    friends: 'Jackson',
    skills: 'negotiation',
  },
];
console.log(users)

const usersBalance = users.reduce((total, user) => total + user.balance, 0);
console.log(usersBalance)

const usersFriend = users.filter((user) => user.friends === 'Pippa')
console.log(usersFriend)

const usersFriendLength = [...users]
 usersFriendLength.sort((currentFriend, nextFriend) => currentFriend.friends.length - nextFriend.friends.length)
console.log(usersFriendLength)

const usersSkills = users.reduce((currentSkills, nextSkills) => {
  currentSkills.push(nextSkills.skills);
  return currentSkills;
}, []);
const skillsSort = usersSkills.sort()
console.log(usersSkills)