import styles from './styles/NewPost.module.css';

export default function NewPost({ body, author, onBody, onAuthor }) {
	const submitHandler = (e) => {
		e.preventDefault();

		const formData = {
			author: author.trim(),
			body,
		};

		if (!formData.author && !formData.body) return;

		console.log(formData);
	};

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<div>
				<label htmlFor="body">Text</label>
				<textarea id="body" rows={3} required onChange={onBody} />
			</div>
			<div>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" required onChange={onAuthor} />
			</div>
		</form>
	);
}
