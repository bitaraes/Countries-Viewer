import React from "react";

import "./style.css";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__container">
					<span className="footer__by">Feito por: Igor Bitarães</span>
					<span className="footer__api">
						API utilizada: CountryLayer
					</span>
				</div>
			</div>
		</footer>
	);
}
