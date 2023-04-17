import styles from '../styles/UserLogIn.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

const UserLogIn = ({ setLoggedInUser }) => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setLoggedInUser(users[0]);
      setUserList(users);
      setIsLoading(false);
    });
  }, [setLoggedInUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    userList.map((user) => {
      if (user.username === selectedUser) {
        setLoggedInUser(user);
      }
    });
    navigate('/articles');
  };

  return (
    <section>
      <form className={styles.ulContainer__Users} onSubmit={handleSubmit}>
        <label htmlFor="user">Hi there! Who are ya?</label>
        <select
          id="user"
          value={selectedUser}
          onChange={(event) => setSelectedUser(event.target.value)}
        >
          {userList.map((user) => {
            return (
              <option
                value={user.username}
                key={user.username}
                className={styles.option__userLogin}
              >
                {user.username}
              </option>
            );
          })}
        </select>
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default UserLogIn;
