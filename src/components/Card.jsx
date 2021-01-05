import React from "react"
import "./Card.css"

function Card(props) {
    return (
                <div className="col-md-6">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top" alt={props.alt} src={props.image} data-holder-rendered="true"/>
                            
                    <div className="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                            
                    <div className="btn-group">
                        <a href={props.link} target="_blank" rel="noopener noreferrer" type="button" className="btn">View</a>
                    </div>
                    </div>

                </div>
                </div>   
    );
}

export default Card;