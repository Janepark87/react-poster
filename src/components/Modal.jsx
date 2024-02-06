import { useNavigate } from 'react-router-dom';
import styles from './styles/Modal.module.css';

export default function Modal({ children, size = 'sm' }) {
	const navigate = useNavigate();

	return (
		<>
			<div className={styles.backdrop} onClick={() => navigate('..')} />
			<dialog open className={`${styles.modal} ${styles[size]}`}>
				{children}
			</dialog>
		</>
	);
}
