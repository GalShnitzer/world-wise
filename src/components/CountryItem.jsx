import styles from "./CountryItem.module.css";
import Emoji from "./Emoji";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <Emoji
        className={styles.emoji}
        emoji={country.emoji}
        label={country.country}
      />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
