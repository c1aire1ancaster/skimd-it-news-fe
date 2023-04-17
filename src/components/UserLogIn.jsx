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
    <section className={styles.container__UserLogin}>
      <form className={styles.ulContainer__UserLogin} onSubmit={handleSubmit}>
        <label htmlFor="user" className={styles.label__UserLogin}>
          Hi there! Who are ya?
        </label>
        <select
          id="user"
          className={styles.select__UserLogin}
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
        <button type="submit" className={styles.button__UserLogin}>
          Login
        </button>
      </form>
    </section>
  );
};

export default UserLogIn;
