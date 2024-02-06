import { Link, Form, redirect } from 'react-router-dom';
import styles from './styles/NewPost.module.css';
import { createPost } from '../../services/apiPosts';

export default function NewPost() {
	return (
		<Form method="post" className={styles.form}>
			<div>
				<label htmlFor="body">Text</label>
				<textarea id="body" rows={3} name="body" required />
			</div>
			<div>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" name="author" required />
			</div>

			<div className={styles.actions}>
				<Link type="button" to="..">
					Cancel
				</Link>
				<button>Submit</button>
			</div>
		</Form>
	);
}

export async function action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	const postData = {
		...data,
		created_at: new Date().toISOString(),
	};

	await createPost(postData);
	return redirect('/');
}
