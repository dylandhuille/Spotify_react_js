import { useState } from "react";
import Joi from "joi";
import TextField from "../../components/Inputs/TextField";
import Select from "../../components/Inputs/Select";
import Radio from "../../components/Inputs/Radio";
import Button from "../../components/Button";
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

const Profile = () => {
	const [data, setData] = useState({
		email: "",
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
		name: Joi.string().min(5).max(10).required().label("Name"),
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.log(data);
	};

	return (
		<div className={styles.container}>
			<h1>Profil</h1>
			<form onSubmit={handleSubmit} className={styles.form_container}>
				<div className={styles.input_container}>
					<TextField
						label="Email"
						placeholder="Entrer votre Email"
						name="email"
						handleInputState={handleInputState}
						value={data.email}
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
								label="Jour"
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
						value={data.gender}
						required={true}
					/>
				</div>
				<div className={styles.submit_btn_wrapper}>
					<Button label="Envoyer" type="submit" />
				</div>
			</form>
		</div>
	);
};

export default Profile;
