const Movie = ({ movie }) => {
    return (
        <div className="card col-3">
            <img src={movie.Poster} className="img-fluid rounded-top" alt="movie" />
            <div className="card-body">
                <h3>{movie.Title}</h3>
                <p>Type: {movie.Type}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{movie.Year}</li>
            </ul>
        </div>
    )
}
export default Movie