import { MdPostAdd, MdMessage } from 'react-icons/md';
import styles from '../components/styles/MainHeader.module.css';
import { Link } from 'react-router-dom';

export default function MainHeader() {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>
				<MdMessage />
				React Poster
			</h1>
			<Link to="/create" className={styles.link}>
				<MdPostAdd size={18} />
				New Post
			</Link>
		</header>
	);
}
