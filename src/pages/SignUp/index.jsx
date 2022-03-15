import { useState } from "react";
import Joi from "joi";
import { Link } from "react-router-dom";
import passwordComplexity from "joi-password-complexity";
import TextField from "../../components/Inputs/TextField";
import Select from "../../components/Inputs/Select";
import Radio from "../../components/Inputs/Radio";
import Checkbox from "../../components/Inputs/Checkbox";
import Button from "../../components/Button";
import logo from "../../images/black_logo.svg";
import styles from "./styles.module.scss";

const months = [
	{ name: "Janvier", value: "01" },
	{ name: "Février", value: "02" },
	{ name: "Mars", value: "03" },
	{ name: "Avril", value: "04" },
	{ name: "Mai", value: "05" },
	{ name: "Juin", value: "06" },
	{ name: "Juillet", value: "07" },
	{ name: "Août", value: "08" },
	{ name: "Septembre", value: "09" },
	{ name: "Octobre", value: "10" },
	{ name: "Novembre", value: "11" },
	{ name: "Décembre", value: "12" },
];

const genders = ["Homme", "Femme", "non-binaire"];

const SignUp = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
		name: "",
		month: "",
		year: "",
		date: "",
		gender: "",
	});
	const [errors, setErrors] = useState({});

	const handleInputState = (name, value) => {
		setData((data) => ({ ...data, [name]: value }));
	};

	const handleErrorState = (name, value) => {
		value === ""
			? delete errors[name]
			: setErrors(() => ({ ...errors, [name]: value }));
	};

	const schema = {
		email: Joi.string().email({ tlds: false }).required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		name: Joi.string().min(5).max(10).required().label("Name"),
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (Object.keys(errors).length === 0) {
			//console.log(data);
		} else {
			//console.log("please fill out properly");
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src={logo} alt="logo" />
			</div>
			<h1 className={styles.heading}>Inscrivez-vous gratuitement pour commencer à écouter.</h1>
			<Button
				label="Inscrivez-vous avec Facebook"
				style={{ background: "#1877f2", color: "white" }}
			/>
			<p className={styles.or_container}>ou</p>
			<form onSubmit={handleSubmit} className={styles.form_container}>
				<h2 className={styles.form_heading}>Inscrivez vous avec votre adresse email</h2>
				<div className={styles.input_container}>
					<TextField
						label="Email"
						placeholder="Entrer votre Email"
						name="email"
						handleInputState={handleInputState}
						schema={schema.email}
						handleErrorState={handleErrorState}
						value={data.email}
						error={errors.email}
						required={true}
					/>
				</div>
				<div className={styles.input_container}>
					<TextField
						label="Créer un mot de passe"
						placeholder="Créer un mot de passe"
						name="password"
						handleInputState={handleInputState}
						schema={schema.password}
						handleErrorState={handleErrorState}
						value={data.password}
						error={errors.password}
						type="password"
						required={true}
					/>
				</div>
				<div className={styles.input_container}>
					<TextField
						label="Pseudonym"
						placeholder="Entrer votre Pseudonym"
						name="name"
						handleInputState={handleInputState}
						schema={schema.name}
						handleErrorState={handleErrorState}
						value={data.name}
						error={errors.name}
						required={true}
					/>
				</div>
				<div className={styles.date_of_birth_container}>
					<p>Votre date de naissance</p>
					<div className={styles.date_of_birth}>
						<div className={styles.month}>
							<Select
								name="month"
								handleInputState={handleInputState}
								label="Mois"
								placeholder="Mois"
								options={months}
								value={data.month}
								required={true}
							/>
						</div>
						<div className={styles.date}>
							<TextField
								label="Date"
								placeholder="DD"
								name="date"
								value={data.date}
								handleInputState={handleInputState}
								required={true}
							/>
						</div>
						<div className={styles.year}>
							<TextField
								label="Année"
								placeholder="YYYY"
								name="year"
								value={data.year}
								handleInputState={handleInputState}
								required={true}
							/>
						</div>
					</div>
				</div>
				<div className={styles.input_container}>
					<Radio
						label="Genre"
						name="gender"
						handleInputState={handleInputState}
						options={genders}
						required={true}
					/>
				</div>
				<div className={styles.checkbox_container}>
					<Checkbox
						required={true}
						label="Partager mes données d'enregistrement avec les fournisseurs de contenu de Spotify à des fins de marketing."
					/>
				</div>
				<p className={styles.terms_condition}>
				En cliquant sur inscription, vous acceptez les conditions de Spotify{" "}
					<a href="/#">Termes et conditions d'utilisation.</a>
				</p>
				<p className={styles.terms_condition}>
				Pour en savoir plus sur la manière dont Spotify collecte, utilise, partage et protège
				vos données personnelles, veuillez consulter{" "}
					<a href="/#">Politique de confidentialité de Spotify.</a>
				</p>
				<div className={styles.submit_btn_wrapper}>
					<Button label="S'inscrire" type="submit" />
				</div>
				<p className={styles.terms_condition} style={{ fontSize: "1.6rem" }}>
				Si vous avez déjà un compte? <Link to="/login"> identifiez-vous!!!</Link>
				</p>
			</form>
		</div>
	);
};

export default SignUp;
