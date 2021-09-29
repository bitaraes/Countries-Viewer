import React, { useState } from "react";
import CountriesList from "../../components/countries-list/countries-list";
import Header from "../../components/header/header";

export default function Home() {
	const [searchFilter, setSearchfilter] = useState(null);

	return (
		<div className="content">
			<Header
				fieldFilter={(e) => {
					setSearchfilter(e);
				}}
			/>
			<CountriesList fieldFilter={searchFilter} />
		</div>
	);
}
