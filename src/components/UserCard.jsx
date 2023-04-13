import styles from '../styles/UserCard.module.css';

const UserCard = (user) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user.username);
  };

  return (
    <li className={styles.li__User}>
      <form onSubmit={handleSubmit}>
        <img
          className={styles.image__UserAvatar}
          src={user.avatar_url}
          alt="user's avatar"
        />
        <h2 className={styles.h2__UserName}>{user.username}</h2>
        <button className={styles.btn__UserLogin} type="submit">
          Login
        </button>
      </form>
    </li>
  );
};

export default UserCard;
