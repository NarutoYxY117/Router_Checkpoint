import "./movielist.css";
import MovieCard from "../MovieCard/MovieCard";
import AddMovie from "../AddMovie/AddMovie";


function MovieList({list, adding}){
    return(
        <div className="MovieList">{
        list.map( (ele,index)=>(
            <MovieCard key={index} ele={ele} />
        ))
        }
        <AddMovie adding={adding}/>
        </div>
    );
}

export default MovieList;