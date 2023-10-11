import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "../styles/Card.css";
import { useSelector } from "react-redux";
import prof_icon from "../images/icon.png"

const Card = ({ id, title, tags, status }) => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);
  return (
		<div className="container card-container">
			<div className="cardHeading2" style={{ justifyContent: "space-between" }}>
				<span style={{ textTransform: "uppercase" }}>
					{id}
				</span>

				{!user && (
					<div className="image">
						<img src={prof_icon} alt="QuickSell" />

						{<div className="status"></div>}
					</div>
				)}
			</div>

			<div className="title">
				<p>{title}</p>
			</div>

			<div className="tags">
				<div className="tag">
					<BsExclamationSquareFill />
				</div>
				{tags?.map((element, index) => {
					return (
						<div key={index} className="tag">
							{/* if(status === "user")
              <BsExclamationSquareFill />
              else if(status === "priority")<p>this is p</p> */}
							<span>●</span> {element}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
