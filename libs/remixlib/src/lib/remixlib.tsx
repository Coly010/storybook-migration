import styles from './remixlib.module.css';

/* eslint-disable-next-line */
export interface RemixlibProps {}

export function Remixlib(props: RemixlibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Remixlib!</h1>
    </div>
  );
}

export default Remixlib;
