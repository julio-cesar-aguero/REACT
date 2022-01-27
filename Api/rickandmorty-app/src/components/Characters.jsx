import React from 'react';
import './characters.css'
const Characters = ({characters = []}) =>{
    const test = () =>{
        console.log(characters)
    }
    return(
        <>
        {test()}
        <div className="container">
        <div className="row">
            {
            characters.map((item, index) => (
                <div key={index} className="col">
                    <div className="card">
                        <img src={item.image} alt="" />
                        <h2>{item.name}</h2>
                        <span>{item.status}</span>
                        <span>{item.species}</span>
                        <span>{item.origin.name}</span>
                        <span>{item.gender}</span>
                        <span>Create: {item.gender}</span>
                    </div>
                </div>
            ))}
            
        </div>
        </div>
        </>
    )
}
export default Characters;