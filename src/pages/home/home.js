import React from "react";
import CountriesList from "../../components/countries-list/countries-list";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

export default function Home() {
	return (
		<div className="content">
			<Header />
			<CountriesList />
			<Footer />
		</div>
	);
}
