import styles from '../styles/UserLogIn.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { getUsers } from '../api/api';
import { LoggedInUserContext } from '../contexts/LoggedInUser';

const UserLogIn = () => {
  const { loggedInUser, setLoggedInUser } = useContext(LoggedInUserContext);
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setUserList(users);
      setIsLoading(false);
    });
  }, [setLoggedInUser, loggedInUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/articles');
  };

  return isLoading ? (
    <div className={styles.container__loading}>
      <h2 className={styles.h2__loading}>
        Hey there! Hold tight whilst we get our shizzle together...
      </h2>
    </div>
  ) : (
    <section className={styles.container__UserLogin}>
      <form className={styles.ulContainer__UserLogin} onSubmit={handleSubmit}>
        <label htmlFor="user" className={styles.label__UserLogin}>
          Hi there! Who are ya?
        </label>
        <select
          id="user"
          className={styles.select__UserLogin}
          value={loggedInUser}
          onChange={(event) => setLoggedInUser(event.target.value)}
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
