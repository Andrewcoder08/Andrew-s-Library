import { useState } from "react";
import { library } from "./assets/library";
import "./App.css";

var bookDb = library;
// console.log(bookDb);
var genre = Object.keys(bookDb);
// console.log(genre);
export default function App() {
  var [selectedGenre, setGenre] = useState("Crime Fiction Novels");

  /* this function is used to set genre */
  function genreSelectedHandler(genreName) {
    setGenre(genreName);
  }
  return (
    <div className="App">
      <header className="header-style">
        <div>Andrew's Library</div>
      </header>

      <section className="intro">
        Hi my name is Andrew, I am an avid reader and there are a lot of books
        that I have come across in my lifetime that touched me.
        <br /> Reading them was no short of a therapy.
        <br />
        These books can lift your spirits and they are too good to not be read.
        <br />
        These books inspired me to write myself, I will put the link to my
        writing page at the bottom of the website.
        <br />
        Here are my top book recommendations, check them out. Happy Reading!
      </section>
      <section>
        {/* use syntax to send genre name to function */}
        {genre.map((genreName) => {
          return (
            <button
              key={genreName}
              onClick={() => genreSelectedHandler(genreName)}
              className="button-style"
            >
              {" "}
              {genreName}
            </button>
          );
        })}
      </section>
      <div className="active-genre">{selectedGenre}</div>
      <section>
        {bookDb[selectedGenre].map((bookDetails) => {
          return (
            <div className="card" key={bookDetails.cover}>
              <img
                src={bookDetails.cover}
                alt="Avatar"
                className="image-style"
              />
              <div key={bookDetails.name} className="container">
                <div className="book-name">{bookDetails.name}</div>
                <div key={bookDetails.about} className="paragraph-style">
                  <div className="book-about">About</div>
                  {bookDetails.about}
                </div>
                <div key={bookDetails.myRating}>
                  <span className="book-rating">My Rating: &nbsp;</span>{" "}
                  {bookDetails.myRating}{" "}
                  <span style={{ color: "orange" }}> &#9733; </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <footer className="footer-style">
        <div className="footer-heading">Andrew's Poetry Page</div>

        <a
          href="https://www.instagram.com/andwrote/"
          target="blank"
          className="link-style"
        >
          @andwrote{" "}
        </a>
      </footer>
    </div>
  );
}
