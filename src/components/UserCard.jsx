import './UserCard.css';

function UserCard({ name, gender, email, avatar, isOnline }) {


  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h3>{gender}</h3>
      <h3><a href="mailto:">{email}</a></h3>
      <img src={avatar || (gender === 'Female'
        ? 'https://www.w3schools.com/howto/img_avatar2.png'
        : 'https://www.w3schools.com/howto/img_avatar.png')}
        alt={`${name}'s avatar`} />
      <p>Status: <span className={`status ${isOnline ? 'online' : 'offline'}`}></span> {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  )
}

export default UserCard