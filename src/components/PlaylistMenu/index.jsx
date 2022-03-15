import { Fragment } from "react";
import { ClickAwayListener } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./styles.module.scss";

const playlists = [
	{ _id: 1, img: "", name: "Écouter récemment", desc: "By Dylan" },
];

const PlaylistMenu = ({ closeMenu }) => {
	return (
		<ClickAwayListener onClickAway={closeMenu}>
			<div className={styles.menu} onClick={closeMenu}>
				<div className={styles.playlist_option}>
					<p>Ajouter à la playlist</p>
					<Fragment>
						<ArrowRightIcon />
						<div className={styles.playlists}>
							{playlists.map((playlist) => (
								<div className={styles.option} key={playlist._id}>
									<p>{playlist.name}</p>
								</div>
							))}
						</div>
					</Fragment>
				</div>
				<div className={styles.option}>
					<p>Accéder à la radio liée au titre</p>
				</div>
				<div className={styles.option}>
					<p>Accéder à l'artiste</p>
				</div>
				<div className={styles.option}>
					<p>Accéder à l'album</p>
				</div>
				<div className={styles.option}>
					<p>Afficher les crédits</p>
				</div>
				<div className={styles.option}>
					<p>Supprimer de Titres likés</p>
				</div>


				<div className={styles.option}>
					<p>Accéder à l'artiste</p>
				</div>
				<div className={styles.option}>
					<p>Partager</p>
				</div>
			</div>
		</ClickAwayListener>
	);
};

export default PlaylistMenu;
