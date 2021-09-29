import { Search } from "@material-ui/icons";
import React from "react";

import "./style.css";

export default function Header() {
	function handleClick() {
		console.log("object");
	}
	return (
		<header className="header">
			<div className="container">
				<div className="header__container">
					<span className="header__logo">Countries Viewer</span>
					<div className="header__search">
						<input
							type="search"
							onKeyPress={(e) => {
								if (e.key === "Enter") handleClick();
							}}
							placeholder="Encontre um país"
						></input>
						<button onClick={handleClick}>
							<Search fontSize="small" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
