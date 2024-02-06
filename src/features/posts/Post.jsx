import { Link } from 'react-router-dom';
import styles from './styles/Post.module.css';

export default function Post({ post: { id, author, body } }) {
	return (
		<li className={styles.post}>
			<Link to={id}>
				<p className={styles.author}>{author}</p>
				<p className={styles.text}>{body}</p>
			</Link>
		</li>
	);
}
