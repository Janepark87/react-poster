import styles from './styles/Spinner.module.css';
import { BiLoaderAlt } from 'react-icons/bi';

export default function Spinner({ size = '' }) {
	return <>{size === 'sm' ? <BiLoaderAlt class={styles['loader-mini']} /> : <div className={styles.loader} />}</>;
}
