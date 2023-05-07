import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import styles from './NavBar.module.css'
import ButtonLogin from './ButtonLogin'
function NavBar(){
    return(
        <nav className={styles.nav_container}>
            <Link to="/">
                <img src={logo} alt='Logo'/>
            </Link>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/services">Planos</Link>
                </li>
                <li>
                    <Link to="/equipe">Equipe</Link>
                </li>
                <li>
                    <Link to="/galeria">Galeria</Link>
                </li>
            <ButtonLogin />
            </ul>
        </nav>
    )
}

export default NavBar;