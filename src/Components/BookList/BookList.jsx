import BookShow from "../BookShow/BookShow";
import "./BookList.scss";
const BookList = ({ books, onDelete }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow onBookDelete={onDelete} book={book} key={book.id} />;
  });
  return <div className="book__list">{renderedBooks}</div>;
};
export default BookList;
