import NumberToRoman from "./components/numberToRoman/page"
import RomanToNumber from "./components/romanToNumber/page"
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.secondDiv}>
          <NumberToRoman />
          <RomanToNumber />
        </div>
        <div className="d-flex justify-content-center">
          <p className="badge --bs-primary-border-subtle text-wrap text-dark fs-5" style={{ width: "60rem" }}>Desarrollado por Iván Scarsella</p>
        </div>
      </div>
    </>
  )
}