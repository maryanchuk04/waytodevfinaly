import React from "react";
import "./MainVideoPopup.css";

function MainVideoPopup({ videoCode, handleCloseVideo }) {
	return (
		<div className="videoPopup">
			<div className="container">
				<div className="videoPopupBlock">
					<iframe
						width="100%"
						src={`https://www.youtube.com/embed/${videoCode}?showinfo=0&controls=1`}
						frameborder="0"
						allowfullscreen></iframe>
				</div>
			</div>
			<div
				className="videoOutterBg"
				onClick={() => handleCloseVideo()}></div>
		</div>
	);
}

export default MainVideoPopup;
