import React, { useState, useEffect } from "react";

import CountryCard from "./country-card/country-card";
import {
	findAllCountries,
	findByRegion,
	findByCountry,
} from "./../../services/api.js";

import "./style.css";

export default function CountriesList({ fieldFilter }) {
	const [countries, setCountries] = useState(null);
	const [filter, setFilter] = useState(null);
	const [region, setRegion] = useState(null);

	useEffect(() => {
		setFilter(fieldFilter);
	}, [fieldFilter]);

	useEffect(() => {
		async function execute() {
			if (!region) {
				setCountries(await findAllCountries());
			} else {
				setCountries(await findByRegion(region));
			}
		}
		execute();
	}, [region]);

	useEffect(() => {
		async function execute() {
			if (filter === "" || !filter) {
				setCountries(await findAllCountries());
			} else {
				setCountries(await findByCountry(filter));
			}
		}
		execute();
	}, [filter]);

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

	function filterByRegion(event) {
		const region = event.toLowerCase();
		// region === "all" ? seeAll() : setCountries(findByRegion(region));
		region === "all" ? setRegion(null) : setRegion(region);
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
