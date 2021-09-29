import React from "react";
import "./style.css";

export default function CountryCard({ country }) {
	return (
		<div className="country-card">
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
	);
}
