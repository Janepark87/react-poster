import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './routes/Root.jsx';
import Posts, { loader as postsLoader } from './routes/Posts.jsx';
import CreatePost from './routes/CreatePost.jsx';
import { action as createPostAction } from './features/posts/NewPost.jsx';
import PostDetails, { loader as postDetailsLoader } from './features/posts/PostDetails.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Posts />,
				loader: postsLoader,
				children: [
					{
						path: '/create',
						element: <CreatePost />,
						action: createPostAction,
					},
					{
						path: '/:postId',
						element: <PostDetails />,
						loader: postDetailsLoader,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
