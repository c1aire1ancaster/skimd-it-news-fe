import styles from '../styles/UserLogIn.module.css';
import { getUsers } from '../utils/api';
import UserCard from './UserCard';
import { useEffect, useState } from 'react';

const UserLogIn = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      setUserList(users);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <h2>Hi there! Login as: </h2>
      

      {/* <ul className={styles.ulContainer__Users}>
        {userList.map((user) => {
          return <UserCard key={user.username} {...user} />;
        })}
      </ul> */}
    </section>
  );
};

export default UserLogIn;
