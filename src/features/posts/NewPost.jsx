import { useState } from 'react';
import styles from './styles/NewPost.module.css';

export default function NewPost({ onAddPost, onCancel }) {
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		const postData = {
			author: author.trim(),
			body,
		};

		if (!postData.author && !postData.body) return;

		onAddPost(postData);
		onCancel();
	};

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<div>
				<label htmlFor="body">Text</label>
				<textarea id="body" rows={3} required onChange={(e) => setBody(e.target.value)} />
			</div>
			<div>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" required onChange={(e) => setAuthor(e.target.value)} />
			</div>

			<div className={styles.actions}>
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
				<button>Submit</button>
			</div>
		</form>
	);
}
