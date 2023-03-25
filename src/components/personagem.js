import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Personagem() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 300);
  }, []);

  if (isLoading) return <Image src="/portal-rick-and-morty.gif" alt="loading" />;
  if (!data) return <p>Erro</p>;

  return (
    <div className={styles.personagens}>
      {data.results.map((personagens) => (
        <>
          <div className={styles.container_personagem}>
            <Image src={personagens.image} key={personagens.id} alt={personagens.name} className={styles.personagem} />
            <div className={styles.overlay}>
              <h2 className={inter.className}>{personagens.name}</h2>
              <p className={inter.className}>Origem: {personagens.origin.name}</p>
              {personagens.status == "Alive" ? (
                <p className={inter.className} style={{ color: " #275e27", background: "#00ff4e", padding: 3, borderRadius: 3 }}>
                  Vivo
                </p>
              ) : (
                <p className={inter.className} style={{ color: " #320000", background: "#ad0b0b", padding: 3, borderRadius: 3 }}>
                  Morto
                </p>
              )}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
