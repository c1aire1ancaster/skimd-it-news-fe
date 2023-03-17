import styles from '../styles/UserLogIn.module.css';
import { getUsers } from '../utils/api';
import { useEffect, useState } from 'react';

const UserLogIn = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((users) => {
      console.log(users);
      setUserList(users);
      setIsLoading(false);
    });
  }, []);


  return (
    <section>
      <ul>

      </ul>
    </section>
  )
}

export default UserLogIn;