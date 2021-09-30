import React, { useState } from "react";

import { Search } from "@material-ui/icons";
import "./style.css";

export default function Header({ fieldFilter }) {
	const [filterValue, setFilterValue] = useState("");

	function handleClick(event) {
		fieldFilter(event);
		setFilterValue("");
	}
	return (
		<header className="header" id="top">
			<div className="container">
				<div className="header__container">
					<span className="header__logo">Countries Viewer</span>
					<div className="header__search">
						<input
							type="search"
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									handleClick(e.target.value);
								}
							}}
							placeholder="Encontre um país"
							onChange={(e) => setFilterValue(e.target.value)}
							value={filterValue}
						></input>
						<button
							onClick={(e) => {
								handleClick(e.currentTarget.value);
							}}
							value={filterValue}
						>
							<Search fontSize="small" />
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
