import { useHistory } from "react-router-dom";
import record from "../../images/record.svg";
import recordArm from "../../images/record-arm.svg";
import styles from "./styles.module.scss";

const NotFound = () => {
	const history = useHistory();

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.main}>
					<h1>404</h1>
					<p>
					Nous n'avons pas trouvé la page que vous cherchiez.
					</p>
					<span onClick={() => history.push("/home")}>Retour à l'accueil</span>
				</div>
			</div>
			<div className={styles.right}>
				<img src={record} alt="record" className={styles.record} />
				<img src={recordArm} alt="record-arm" className={styles.record_arm} />
			</div>
		</div>
	);
};

export default NotFound;
