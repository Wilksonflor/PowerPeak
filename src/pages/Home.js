import styles from "./Home.module.css";
import casal_Home from "../img/casal_Home.png";
import BtnInscrever from "../layout/BtnInscrever";

import Grid from '@mui/material/Grid'; // Grid version 1

function Home() {
  return (
    <>
    <section className={styles.section_container}>
      <div className={styles.text}>
        <h1>PowerPeak</h1>
        <span>Transforme-se em uma vesão mais forte de você</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          blandit eget ante sed blandit. Vivamus posuere iaculis semper. Etiam
          in turpis et lacus finibus dignissim. Donec efficitur, felis nec
          malesuada varius, mi dui gravida quam, id laoreet orci nulla id
          mauris.
        </p>
        <BtnInscrever />
      </div>
      <div className={styles.img_container}>
        <div className={styles.img_content}>
          <img src={casal_Home} />
        </div>
      </div>
    </section>

    <div>
      <h2>Slide</h2>

      <div>
      
        <div>
          foto
          <p>texto</p>
        </div>

        <div>
          foto
          <p>texto</p>
        </div>
        
        <div>
          foto
          <p>texto</p>
        </div>
        <div>
          foto
          <p>texto</p>
        </div>

        <div>
          foto
          <p>texto</p>
        </div>

        <div>
          foto
          <p>texto</p>
        </div>

      </div>

    </div>

    </>

  );
}

export default Home;
