import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./BtnInscrever.module.css";
import { Link } from "react-router-dom";

function BtnInscrever() {
  return (
    <div className={styles.btn_inscrever_Container}>
        <div className={styles.btn_inscrever}>
      <Link to="/src/components/FormInscrever.js">
          Comece agora
      </Link>
          <ArrowForwardIcon />
        </div>
    </div>
  );
}

export default BtnInscrever;