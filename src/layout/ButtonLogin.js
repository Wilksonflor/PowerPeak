import LoginIcon from '@mui/icons-material/Login';
import styles from './ButtonLogin.module.css'
function ButtonLogin(){
    return(
        <button className={styles.btn_login}>
            <LoginIcon>       
            </LoginIcon>
        </button>
    )
}

export default ButtonLogin;