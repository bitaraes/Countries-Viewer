import React from "react";
import CountryCard from "./country-card/country-card";

import "./style.css";

export default function CountriesList() {
	return (
		<div className="container">
			<section className="countries">
				<div className="countries__container">
					<CountryCard />
					<CountryCard />
					<CountryCard />
					<CountryCard />
					<CountryCard />
					<CountryCard />
					<CountryCard />
				</div>
			</section>
		</div>
	);
}
