import React from "react";

const Card = ({ name, email, id} ) => {
	return (
           <div className="tc bg-light-green dib br3 pd3 ma2 grow bw  shadow-2">
           		<img src={`https://robohash.org/${id}?200x200`} alt="photo" />
           		<div>
           			<h2>{name}</h2>
           		    <p>{email}</p>
           		</div>
           </div>
		);
}

export default Card;
