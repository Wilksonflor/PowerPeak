import CheckIcon from "@mui/icons-material/Check";

import styles from "../pages/Services.module.css";
function Services() {
  return (
    <>
      <h2>Escolha o seu plano!</h2>
      <div className={styles.container_Card}>

        <div className={styles.boxContainer}>
          <div className={styles.headerBox}>
            <h2>Titulo</h2>
            <p>Plano básico</p>
            <button>Escolher plano</button>
          </div>
          <div >
            <CheckIcon/> lalala
            <CheckIcon/> lalala
            <CheckIcon/> lalala
            <CheckIcon/> lalala
          </div>
        </div>

     <div className={styles.boxContainer}>
          <div>
            <h2>Titulo</h2>
            <p>Plano básico</p>
            <button>Escolher plano</button>
          </div>
          <div>
            <CheckIcon/> lalala
            <CheckIcon/> lalala
            <CheckIcon/> lalala
            <CheckIcon/> lalala
          </div>
        </div>

        <div className={styles.boxContainer}>
          <div>
            <h2>Titulo</h2>
            <p>Plano básico</p>
            <button>Escolher plano</button>
          </div>
          <div>
            <CheckIcon/> lalala
            <CheckIcon/> lalala
            <CheckIcon/> lalala
            <CheckIcon/> lalala
          </div>
        </div>

      </div>
    </>
  );
}

export default Services;
