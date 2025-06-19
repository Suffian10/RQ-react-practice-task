import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import Counter from './components/Counter';
import ContactForm from './components/ContactForm';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState('');
  const [users, setUsers] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format!');
      return;
    }
    const newUser = {
      name,
      email,
      gender,
      avatar,
      isOnline: Math.random() > 0.5
    }
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
    setGender('');
  }
  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px', border: '1px solid black', padding: '20px' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '30px' }}>Task 1.1</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
          <br /><br />
          <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br /><br />
          <label><input type="radio" name='gender' value="Male" checked={gender === 'Male'} onChange={e => setGender(e.target.value)} />Male</label>
          <label><input type="radio" name='gender' value="Female" checked={gender === 'Female'} onChange={e => setGender(e.target.value)} />Female</label>
          <br /><br />
          <input type="text" placeholder='Enter your avatar URL' value={avatar} onChange={(e) => setAvatar(e.target.value)} />
          <br /><br />
          <button type="submit" disabled={!name || !email || !gender} onClick={() => handleSubmit}>Submit</button>
        </form>
        <br /><br />
      </div>
      <div className='card-container'>
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            gender={user.gender}
            avatar={user.avatar}
            isOnline={user.isOnline}
          />
        ))}
      </div>
      <br /><br />
      <div style={{ textAlign: 'center', margin: '20px', border: '1px solid black', padding: '20px' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '30px' }}>Task 1.2</h3>
        <Counter />
      </div>
      <br /><br />
      <div style={{ textAlign: 'center', margin: '20px', border: '1px solid black', padding: '20px' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '30px' }}>Task 1.2</h3>
        <ContactForm />
      </div>
    </>
  )
}

export default App
