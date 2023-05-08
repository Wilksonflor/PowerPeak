import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./BtnInscrever.module.css";
import { Link } from "react-router-dom";
function BtnInscrever() {
  return (
    <div className={styles.btn_inscrever}>
    <Link >
      Comece agora
    </Link>
      <ArrowForwardIcon />
    </div>
  );
}

export default BtnInscrever;
