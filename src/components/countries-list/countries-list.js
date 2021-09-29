import React, { useState, useEffect } from "react";

import CountryCard from "./country-card/country-card";
import { findAllCountries } from "./../../services/api.js";
import { countriesJson } from "./../../utils/mocks/countriesJson.js";
import "./style.css";

export default function CountriesList({ fieldFilter }) {
	const [countries, setCountries] = useState(null);

	useEffect(() => {
		if (!countries) {
			// findAllCountries().then((countries) => setCountries(countries))
			setCountries(countriesJson);
		}
	}, [countries]);
	useEffect(() => {
		if (!!fieldFilter) {
			const filtered = countries.filter((country) => {
				console.log(country);
				return country.name.toLowerCase() === fieldFilter.toLowerCase();
			});
			return setCountries(filtered);
		}
	}, [fieldFilter]);

	function mountCountries() {
		if (countries && countries.length < 250) {
			return countries.map((current, index) => {
				return (
					<div className="filtered-countries">
						<CountryCard country={current} key={index} />{" "}
						<button onClick={seeAll}>Ver todos</button>{" "}
					</div>
				);
			});
		} else {
			return countries
				? countries.map((current, index) => {
						return <CountryCard country={current} key={index} />;
				  })
				: null;
		}
	}

	function seeAll() {
		setCountries(countriesJson);
	}

	return (
		<div className="container">
			<section className="countries">
				<div className="countries__container">{mountCountries()}</div>
			</section>
		</div>
	);
}
