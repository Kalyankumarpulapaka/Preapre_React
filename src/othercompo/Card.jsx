import React,{useState} from "react";

const Card=()=>{
    const [count, setCount] = useState(0);

    const handle = () => {
      setCount(count + 1);
    };
  
    const rhandle = () => {
      setCount(count - 1);
    };
    return(
        <div>
      
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {count === 0 ? (
              <button className="btn btn-primary" onClick={handle}>Add Item</button>
            ) : (
              <button className="btn btn-danger" onClick={rhandle}>Remove Item</button>
            )}
          </div>
        </div>
        <h1>answer: {count}</h1>
      </div>
    )
}
export default Card;