import React, { useState, useEffect } from "react";
import "./MainVideoPopup.css";

function MainVideoPopup({ videoCode, handleCloseVideo, showVideo }) {
	const [zoom, setZoom] = useState(false);
	useEffect(() => {
		showVideo &&
			setTimeout(() => {
				setZoom(showVideo);
			}, 0);
	}, [showVideo]);

	const handleClose = () => {
		setZoom(false);
		setTimeout(() => {
			handleCloseVideo();
		}, 300);
	};

	return (
		<div className="videoPopup">
			<div className="container">
				<div
					className="videoPopupBlock"
					style={{ transform: `scale(${zoom ? 1 : 0})` }}>
					<iframe
						width="100%"
						src={`https://www.youtube.com/embed/${videoCode}?showinfo=0&controls=1`}
						frameborder="0"
						allowfullscreen></iframe>
				</div>
			</div>
			<div className="videoOutterBg" onClick={() => handleClose()}></div>
		</div>
	);
}

export default MainVideoPopup;
