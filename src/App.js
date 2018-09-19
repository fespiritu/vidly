import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
// import { getGenres } from "./services/fakeGenreService";
import { getMovies } from "./services/fakeMovieService";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const movies = getMovies();
    const movieCount = movies.length;

    return (
      <main className="container">
        <h1>Vidly</h1>
        <p>
          Showing <span>{movieCount} </span> movies the the database.
        </p>
        <table className="table">
          <thead>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </thead>
          <tbody>
            {movies.map(x => (
              <tr>
                <td>{x.title}</td>
                <td>{x.genre.name}</td>
                <td>{x.numberInStock}</td>
                <td>{x.dailyRentalRate}</td>
                <td>
                  <button
                    aria-label="Delete"
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    <i className="fa fa-trash" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default App;
