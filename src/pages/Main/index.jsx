import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PublicIcon from '@mui/icons-material/Public';
import CopyrightIcon from "@mui/icons-material/Copyright";
import logo from "../../images/white_logo.svg";
import styles from "./styles.module.scss";

const navLinks = [
	{ name: "Premium", link: "#" },
	{ name: "Assistance", link: "#" },
	{ name: "Télécharger", link: "#" },
	{ name: "S'inscrire", link: "/signup" },
	{ name: "Connexion", link: "/login" },
];

const companyLInks = ["A propos", "Offres d'emploi", "For the record"];

const communitiesLinks = [
	"Espace artistes",
	"Développeurs",
	"Campagnes publicitaires",
	"Investisseur",
	"Fournisseurs",
];

const usefulLInks = ["Assistance", "Lecteur Web", "Appli mobile gratuite"];

const footerLinks = [
	"légal",
	"Centre de confidentialité",
	"Protection des données",
	"Cookies",
	"Paramètres des cookies",
	"À propos des pubs",
];

const footerIcons = [<InstagramIcon />, <TwitterIcon />, <FacebookIcon />];

const Main = () => {
	return (
		<div className={styles.container}>
			<nav className={styles.navbar_container}>
				<Link to="/" className={styles.nav_logo}>
					<img src={logo} alt="logo" />
				</Link>
				<div className={styles.nav_links}>
					{navLinks.map((link, index) => (
						<Link key={index} to={link.link} className={styles.links}>
							{link.name}
						</Link>
					))}
				</div>
			</nav>
			<main className={styles.main_container}>
				<div className={styles.main}>
					<h1>Écouter, ça <br />change  tout</h1>
					<p>Des millions de titres et de podcasts. Aucune carte de crédit nécessaire.</p>
					<Link to="/signup">
						<Button
							label="TÉLÉCHARGEZ SPOTIFY"
							style={{ color: "#2941ab", width: "18rem", fontSize: "1.4rem" }}
						/>
					</Link>
				</div>
			</main>
			<footer className={styles.footer_container}>
				<div className={styles.footer_1}>
					<Link to="/" className={styles.footer_logo}>
						<img src={logo} alt="logo" />
					</Link>
					<div className={styles.footer_1_links}>
						<div className={styles.footer_heading}>SOCIÉTÉ</div>
						{companyLInks.map((link, index) => (
							<div className={styles.links} key={index}>
								{link}
							</div>
						))}
					</div>
					<div className={styles.footer_1_links}>
						<div className={styles.footer_heading}>COMMUNAUTÉS</div>
						{communitiesLinks.map((link, index) => (
							<div className={styles.links} key={index}>
								{link}
							</div>
						))}
					</div>
					<div className={styles.footer_1_links}>
						<div className={styles.footer_heading}>LIENS UTILES</div>
						{usefulLInks.map((link, index) => (
							<div className={styles.links} key={index}>
								{link}
							</div>
						))}
					</div>
					<div className={styles.footer_icons}>
						{footerIcons.map((icon, index) => (
							<div className={styles.icon} key={index}>
								{icon}
							</div>
						))}
					</div>
				</div>
				<div className={styles.footer_2}>
					<div className={styles.footer_2_links}>
						{footerLinks.map((link, index) => (
							<div className={styles.links} key={index}>
								{link}
							</div>
						))}
					</div>
					<div className={styles.copy_right}>
					<PublicIcon />
					<span>France</span>
						<CopyrightIcon />
						<span>2022 Spotify AB</span>
					</div>
				</div>
			</footer> 
		</div>
	);
};

export default Main;
