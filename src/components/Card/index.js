import "./Card.css"
function Card({title,p}){
    return (

        <div className="Card">
        <h6>{title}</h6>
        <p>{p}</p>
        <button>Devamı</button>

    </div>

    );
    
}

export default Card;