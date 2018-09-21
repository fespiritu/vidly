import React, { Component } from "react";
// import { getGenres } from "./services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
//import { Input } from "reactstrap";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      pageSize: 4
    };
  }

  handleClickDelete = movie => {
    console.log("movie to delete: ", movie);
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = () => {
    return null;
  };
  render() {
    const { movies, pageSize } = this.state;
    const count = movies.length;
    const page = 1;

    if (movies.length === 0) {
      return <p>There are no movies in the database.</p>;
    }
    return (
      <div>
        <p>
          Showing <span>{count} </span> movies from the database.
        </p>
        <div>
          <label>First Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" autoFocus />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleClickDelete(movie)}
                    aria-label="Delete"
                  >
                    <i className="fa fa-trash" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={() => this.handlePageChange(page)}
        />
      </div>
    );
  }
}

export default Movies;
