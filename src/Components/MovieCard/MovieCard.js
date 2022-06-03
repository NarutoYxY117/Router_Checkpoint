
import "./moviecard.css";
import {Link} from 'react-router-dom'

export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">
                <div>
                    <div>
                    <img width="300" src={ele.img} />
                    </div>
                    <div >
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                    <Link to={`/${ele.title}`}>Trailer</Link>
                    <h3>Rate : {ele.rating}</h3>
                    <h4>{ele.posterURL}</h4>
                    </div>
                </div>
            </div>
    )
}
