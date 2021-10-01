import React, { useState } from "react";
import "./style.css";
import { Box, Modal } from "@material-ui/core";

export default function CountryCard({ country }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleclose = () => setOpen(false);
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 300,
		bgcolor: "#f2f2f2",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
		display: "flex",
		flexDirection: "column",
		alignItems: "space-between",
		justifyContent: "center",
	};
	return (
		<>
			<div className="country-card" onClick={handleOpen}>
				<div className="country-card__img-container">
					<img
						src={`/img/flags/${country.alpha2Code.toLowerCase()}.png`}
						alt={`${country.name} flag`}
					></img>
				</div>
				<div className="country-card__info-container">
					<h3>{country.name}</h3>
					<p>
						<span>Region: </span>
						{country.region}
					</p>
					<p>
						<span>Capital: </span>
						{country.capital}
					</p>
					<p>
						<span>Domain: </span>
						{country.topLevelDomain}
					</p>
				</div>
			</div>
			<Modal
				open={open}
				onClose={handleclose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div className="country-card__img-container">
						<img
							src={`/img/flags/${country.alpha2Code.toLowerCase()}.png`}
							alt={`${country.name} flag`}
						></img>
					</div>
					<div className="country-card__info-container">
						<h3>{country.name}</h3>
						<p>
							<span>Region: </span>
							{country.region}
						</p>
						<p>
							<span>Capital: </span>
							{country.capital}
						</p>
						<p>
							<span>Domain: </span>
							{country.topLevelDomain}
						</p>
					</div>
				</Box>
			</Modal>
		</>
	);
}
