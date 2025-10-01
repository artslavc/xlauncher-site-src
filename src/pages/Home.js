/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import { useRef } from "react";

import "./style.css";
import background_1 from "../img/background_1.png";
import background_2 from "../img/background_2.png";
import background_3 from "../img/background_3.png";
import launcher_img from "../img/main_image.jpg";
import cheats_img from "../img/main-image-cheats.jpg";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <main>
      <div className="container">
        <section>
          <h1>
            этот лаунчер создан <br /> для тебя
          </h1>
          <p>
            Своя система модпаков, красивый дизайн, свежие читы. <br /> Попробуй
            сегодня!
          </p>
        </section>
        {/* Block 1 */}
        <div className="block-1">
          <div className="block">
            <img id="background_launcher" src={background_1} alt="Background" />
            <img id="launcher_img" src={launcher_img} alt="Main Photo" />

            <ul id="ul_scroll">
              <li>Красивый дизайн</li>
              <li>Система модпаков</li>
              <li>Свежие читы</li>
              <li>Новые версии</li>
              <li>... И многое другое!</li>
            </ul>
          </div>
        </div>
        {/* Block 2 */}
        <div className="block-2">
          <div className="block">
            <img id="background_cheats" src={background_2} alt="Background" />
            <motion.img
              ref={ref}
              id="cheats_img"
              src={cheats_img}
              alt="Main Photo"
              initial={{ opacity: 0, x: -100 }}
              whileHover={{ scale: 1.04 }}
              animate={
                isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: "absolute",
                zIndex: 51,
                borderRadius: "1.67vw",
                width: "66.77vw",
                height: "38.44vw",
                marginLeft: "-19.58vw",
                marginTop: "9.53vw",
              }}
            />

            <h1>
              Самые свежие <br /> читы
            </h1>
            <p>(Andromeda client, Nursultan...)</p>
          </div>
        </div>
        {/* Block 3 */}
        <div className="block-3">
          <div className="block">
            <img id="background_download" src={background_3} alt="Background" />
            
            <h1>Мы ждем тебя в <br /> Нашей семье!</h1>
            <button><p>Скачать Лаунчер</p></button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
