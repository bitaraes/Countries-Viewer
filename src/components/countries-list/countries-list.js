import React, { useState, useEffect } from "react";

import CountryCard from "./country-card/country-card";
// import { findAllCountries } from "./../../services/api.js";
import {
	countriesJson,
	regionsJson,
} from "./../../utils/mocks/countriesJson.js";
import "./style.css";

export default function CountriesList({ fieldFilter }) {
	const [countries, setCountries] = useState(null);

	useEffect(() => {
		if (!countries) {
			seeAll();
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
		return countries
			? countries.map((current, index) => {
					return (
						<CountryCard
							country={current}
							key={index}
						></CountryCard>
					);
			  })
			: null;
	}
	function seeAll() {
		// findAllCountries().then((countries) => setCountries(countries))
		setCountries(countriesJson);
	}
	function filterByRegion(event) {
		const region = event.toLowerCase();
		console.log(region);
		region === "all" ? seeAll() : setCountries(regionsJson[region][0]);
	}

	return (
		<div className="container">
			<section className="countries">
				<select
					onChange={(e) => {
						filterByRegion(e.target.value);
					}}
					defaultValue={"Filter by region"}
				>
					<option disabled value="Filter by region">
						Filter by region
					</option>
					<option value="all">All</option>
					<option value="africa">Africa</option>
					<option value="americas">Americas</option>
					<option value="asia">Asia</option>
					<option value="europe">Europe</option>
					<option value="oceania">Oceania</option>
					<option value="polar">Polar</option>
				</select>
				<div className="countries__container">{mountCountries()}</div>
			</section>
		</div>
	);
}
