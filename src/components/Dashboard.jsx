import React from "react";
import { useSelector } from "react-redux";
import { BsReception4, BsPlusLg } from "react-icons/bs"; //BsReception4
import "../styles/Dashboard.css";
import Card from "../components/Card";
import NewHeader from "./NewHeader";
import prof_icon from "../images/icon.png"
import { SlOptionsVertical } from "react-icons/sl"

const Dashboard = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);
  // console.log("--->", dataSelected);
  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
						<>
							<div
								key={index}
								className="dashboard"
								// style={{ backgroundColor: "whitesmoke" }}
							>
								<div className="cardHeading1">
									<div
										className="sideView1"
										style={{
											color: "white",
											display: "flex",
											alignItems: "center",
										}}
									>
										{!user ? (
											// <BsReception4 />
											<NewHeader grp={element[index].title} />
										) : (
											<>
												<div className="image">
													<img src= {prof_icon} alt="QuickSell" />
												</div>
											</>
										)}
										<span>
											&nbsp;{element[index]?.title} {element[index]?.value?.length}
										</span>
									</div>
									<div className="sideView2">
										<BsPlusLg style={{ color: "white" }} />
										<span style={{ color: "white", letterSpacing: "2px" }}><SlOptionsVertical/></span>
									</div>
								</div>
								<div className="selectList">
									{element[index]?.value?.map((element, ind) => {
										return (
											<Card
												id={element.id}
												title={element.title}
												tags={element.tag}
											/>
										);
									})}
								</div>
							</div>
						</>
					);
        })}
      </div>
    )
  );
};

export default Dashboard;
