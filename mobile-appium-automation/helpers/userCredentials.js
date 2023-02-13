import * as users from "../../usersDevEnv.json";

export const getCredentials = (userName) => {
  const userCredentials = users[userName];

  return {
    mail: userCredentials.mail,
    password: userCredentials.password,
  };
};
