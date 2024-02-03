import styles from './styles/EmptyPost.module.css';

export default function EmptyPost() {
	return (
		<div className={styles['empty-post-container']}>
			<h2>There are no posts yet.</h2>
			<p>Start adding some!</p>
		</div>
	);
}
