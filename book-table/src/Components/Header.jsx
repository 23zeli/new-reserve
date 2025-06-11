import RightBar from './Nav/RightBar'

function Header() {
  return (
    <header className='header' >
      <img src="./images/Logo.png" alt="logo" style={{width: "199px", height: "50px"}}/>
      <RightBar />
    </header>
  )
}

export default Header