import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerzin}>
        <a className={inter.className} href="">
          <span className={inter.className} style={{ color: "#a9d3e9" }}>
            Hiki&nbsp;
          </span>
          & Morty
        </a>
        <nav>
          <ul className={`${styles.listHeader} ${inter.className}`}>
            <li>
              <a href="">Personagens</a>
            </li>
            <li>
              <a href="">Episodios</a>
            </li>
            <li>
              <a href="">Localização</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
