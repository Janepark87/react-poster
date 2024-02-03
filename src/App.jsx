import { useState } from 'react';
import MainHeader from './components/MainHeader';
import PostList from './features/posts/PostList';

export default function App() {
	const [modal, setModal] = useState(false);
	const openModal = () => setModal(true);
	const closeModal = () => setModal(false);

	return (
		<>
			<MainHeader onCreatePost={openModal} />

			<main>
				<PostList isPosting={modal} onStopPosting={closeModal} />
			</main>
		</>
	);
}
