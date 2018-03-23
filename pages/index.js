import styles from './styles.scss';

import cat from './images/happy-cat.jpg';

export default ({ children }) => {
  return (
    <div>
      <link rel="stylesheet" href="/_next/static/style.css" />

      <p>
        A picture of a cat that should always be displayed:
        <img src={cat} />
      </p>

      <h1 className={styles.heading}>A background image of a cat which isn’t always displayed</h1>
    </div>
  );
};
