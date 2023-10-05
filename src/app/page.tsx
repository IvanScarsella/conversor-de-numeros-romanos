import NumberToRoman from "./components/numberToRoman/page"
import RomanToNumber from "./components/romanToNumber/page"
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.mainDiv}>
        <NumberToRoman />
        <RomanToNumber />
      </div>
    </>
  )
}