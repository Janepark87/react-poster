const apiUrl = import.meta.env.VITE_POST_API_URL;

export async function getPosts() {
	try {
		const response = await fetch(`${apiUrl}/posts`);

		if (!response.ok) {
			throw Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
		}

		const data = await response.json();
		const sortedByDate = data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

		return sortedByDate;
	} catch (error) {
		throw Error('Failed getting posts');
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
