import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copywrite}>
        &copy; Copywrite {new Date().getFullYear()} by worldWise Inc.
      </p>
    </footer>
  );
}

export default Footer;
