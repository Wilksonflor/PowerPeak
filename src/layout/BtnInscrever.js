import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./BtnInscrever.module.css";
import { Link } from "react-router-dom";

function BtnInscrever() {
  return (
    <div className={styles.btn_inscrever_Container}>
      <Link to="/src/components/FormInscrever.js">
        <div className={styles.btn_inscrever}>
          Comece agora
          <ArrowForwardIcon />
        </div>
      </Link>
    </div>
  );
}

export default BtnInscrever;