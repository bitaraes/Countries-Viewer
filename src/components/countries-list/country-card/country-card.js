import React from "react";

import "./style.css";

export default function CountryCard() {
	return (
		<div className="country-card">
			<img src="/img/flags/af.png"></img>
			<h3>Afghanistan</h3>
			<p>
				<span>Region:</span> Asia
			</p>
			<p>
				<span>Capital:</span> Kabul
			</p>
			<p>
				<span>Domain:</span> .af
			</p>
		</div>
	);
}
