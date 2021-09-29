import React, { useState, useEffect } from "react";

import CountryCard from "./country-card/country-card";
import { findAllCountries } from "./../../services/api.js";
import { countriesJson } from "./../../utils/mocks/countriesJson.js";
import "./style.css";

export default function CountriesList() {
	const [countries, setCountries] = useState(null);

	useEffect(() => {
		if (!countries) {
			// findAllCountries().then((countries) => setCountries(countries))
			setCountries(countriesJson);
		}
	}, [countries]);
	return (
		<div className="container">
			<section className="countries">
				<div className="countries__container">
					{countries
						? countries.map((current, index) => {
								return (
									<CountryCard
										country={current}
										key={index}
									/>
								);
						  })
						: null}
				</div>
			</section>
		</div>
	);
}
