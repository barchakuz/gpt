import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/Logo2.png'

const Menu = ()=>(
  <>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is GPT3</a></p>
                <p><a href="#possibility">OpenAI</a></p>
                <p><a href="#features">CaseStudies</a></p>
                <p><a href="#blog">Library</a></p>
  </>
)

function NavBar() {
  const [toogleMenu, settoogleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
              <img src={logo} alt="logo" />

            </div> 
            <div className="gpt3__navbar-links_container">
                <Menu />
              </div> 
      </div>
      <div className="gpt3__navbar-sign">
        <p>SignIn</p>
        <button type='button'>SignUp</button>
      </div>
        <div className="gpt3__navbar-menu">
          {toogleMenu
          ? <RiCloseLine color="fff" size={27} onClick={()=>settoogleMenu(false)} /> 
          : <RiMenu3Line color="fff" size={27} onClick={()=>settoogleMenu(true)} /> }
          {toogleMenu && (<div className='gpt3__navbar-menu_container scale-up-center'>
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
          </div>)  }
        </div>
    </div>
  )
}

export default NavBar