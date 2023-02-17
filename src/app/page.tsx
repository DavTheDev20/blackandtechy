import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.jumbotron}>
        <h1>Welcome to Black and Techy</h1>
      </div>
      <div className={styles['cta-section']}>
        <h2>Be a Part of the Community!</h2>
        <button>Join Today</button>
      </div>
    </div>
  );
}
