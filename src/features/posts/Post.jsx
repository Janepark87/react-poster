import styles from './styles/Post.module.css';

export default function Post({ author, body }) {
	return (
		<div className={styles.post}>
			<p className={styles.author}>{author}</p>
			<p className={styles.text}>{body}</p>
		</div>
	);
}
