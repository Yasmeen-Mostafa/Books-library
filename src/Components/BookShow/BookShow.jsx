import "./BookShow.scss";
const BookShow = ({ book, onBookDelete }) => {
  //book is the object that hold id of book and title
  const onDeleteClick = () => {
    onBookDelete(book.id);
  };
  return (
    <div className="book__show">
      <h3>{book.title}</h3>
      <button onClick={onDeleteClick} className="delete">
        X
      </button>
      <button className="edit">📝</button>
    </div>
  );
};
export default BookShow;
