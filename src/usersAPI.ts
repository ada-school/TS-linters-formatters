interface User {
  id?: number;
  name: string;
  age: number;
}

let users: Array<User> = [];

export class UsersAPI {
  createUser(user: Omit<User, "id">) {
    let id = Math.random() * 1000;
    let newUser = { id, ...user };

    users.push(newUser);

    return newUser;
  }

  deleteUser(userId: number) {
    let newUserList = [];

    for (let index = 0; index < users.length; index++) {
      const user = users[index];

      if (user.id !== userId) {
        newUserList.push(user);
      }
    }

    users = newUserList;

    console.log({ users });

    return users;
  }
}
