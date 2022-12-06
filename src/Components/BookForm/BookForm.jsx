import { useState } from "react";
import "./BookForm.scss";
const BookForm = ({ onCreate }) => {
  const [term, setTerm] = useState(""); //state for the form input
  const onFormSubmit = (e) => {
    e.preventDefault(); //prevent default action (refresh page when submit) of the form
    onCreate(term); //send the input term to the prop onCreate()
    setTerm(""); // after submitting the form clear the input value
  };
  const onInputChange = (e) => {
    setTerm(e.target.value); // update the state when the user types something
  };

  return (
    <div className="book__form">
      <h2>Add New Book</h2>
      <form className="form__container" onSubmit={onFormSubmit}>
        <label>Book Name</label>
        <input value={term} onChange={onInputChange} />
        <button>Add Book</button>
      </form>
    </div>
  );
};
export default BookForm;
