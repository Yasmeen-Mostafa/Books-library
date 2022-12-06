import { useState } from "react";
import "./App.css";
import BookForm from "./Components/BookForm/BookForm";
import BookList from "./Components/BookList/BookList";

function App() {
  //we defina state in the lowest parent for all childrens need it=>
  //BookForm: creates new book so we need to know about the books array so that we can push new one
  //BookEdit: edit in any element in that array so we need to know each element to edit the title
  //BookShow: show each book card, so we need to know the array element to display it
  //BookList: need t know all array elements to iterate over them
  // so the parent of all of those components is App so we will define state here
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    console.log(title);
    setBooks([...books, { id: Math.floor(Math.random() * 1000), title }]); //when updating state that is an array or an object we use this way to update it so that we have now new reference to the new array so react will rerender now if state updated!, spread the old state then add new one
    //when updating array or object we must use this way!
  };
  const deleteBookById = (id) => {
    const renderedBook = books.filter((book) => book.id !== id);
    setBooks(renderedBook);
  };
  return (
    <div className="app">
      <BookForm onCreate={createBook} />
      {/* {books.length} */}
      {/* send as a props the books array so that we can iterate over them */}
      <BookList onDelete={deleteBookById} books={books} />
    </div>
  );
}

export default App;
