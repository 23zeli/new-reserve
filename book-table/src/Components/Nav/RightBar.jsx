import { BrowserRouter as Router, Link } from 'react-router-dom';




const RightBar = () => {

  return (
    <Router>
      <ul className='nav_items'>
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/specials" className="nav-item">About</Link></li>
        <li><Link to="/menu" className="nav-item">Menu</Link></li>
        <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
        <li><Link to="/orderOnline" className="nav-item">Order Online</Link></li>
        <li><Link to="/login" className="nav-item">Login</Link></li>
      </ul>
    </Router>
  )
}

export default RightBar