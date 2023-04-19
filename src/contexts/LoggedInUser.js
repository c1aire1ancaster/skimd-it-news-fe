import { createContext, useState } from 'react';

export const LoggedInUserContext = createContext();

export const LoggedInUserProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: 'tickle122',
    name: 'Tom Tickle',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/d…r-Tickle-9a.png/revision/latest?cb=20180127221953',
  });

  return (
    <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </LoggedInUserContext.Provider>
  );
};
