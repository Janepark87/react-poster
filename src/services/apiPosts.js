const apiUrl = import.meta.env.VITE_POST_API_URL;

export async function getPosts() {
	try {
		const res = await fetch(`${apiUrl}/posts`);

		if (!res.ok) {
			throw Error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
		}

		const data = await res.json();
		const sortedByDate = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

		return sortedByDate;
	} catch (error) {
		throw Error('Failed getting posts');
	}
}

export async function getPost(postId) {
	try {
		const res = await fetch(`${apiUrl}/posts/${postId}`);

		if (!res.ok) {
			throw Error(`Failed to fetch post: ${res.status} ${res.statusText}`);
		}

		const data = await res.json();
		return data;
	} catch (error) {
		throw Error('Failed getting post');
	}
}

export async function createPost(postData) {
	try {
		const res = await fetch(`${apiUrl}/posts`, {
			method: 'POST',
			body: JSON.stringify(postData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!res.ok) {
			// Handle the case where the server returns an error
			throw Error(`Failed creating your new post: ${res.status} ${res.statusText}`);
		}

		const data = await res.json();
		return data;
	} catch (error) {
		throw Error('Failed creating your new post');
	}
}
