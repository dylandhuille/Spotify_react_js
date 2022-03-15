import { Fragment } from "react";
import Playlists from "../../components/Playlists";
import styles from "./styles.module.scss";
import playlistImg from "../../images/rock.jpg";

const playlists = [
	{ _id: 1, img: playlistImg, name: "Playlists publiques", desc: "Par Spotify" },
];

const Home = () => {
	return (
		<Fragment>
			<div className={styles.container}>
				<h1>Bonjour</h1>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
				</div>
				<h1>Albums populaires</h1>
				<div className={styles.playlists_container}>
					<Playlists playlists={playlists} />
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
