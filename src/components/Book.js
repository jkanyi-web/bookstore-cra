import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBooks } from '../redux/features/books/booksSlice';

const BookDetails = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="items">
      <h4>{category}</h4>
      <h3>{title}</h3>
      <p>{author}</p>
      <ul className="comments">
        <li>Comments</li>
        <li>
          <button type="button" onClick={() => dispatch(deleteBooks(id))}>
            Remove
          </button>
        </li>
        <li>Edit</li>
      </ul>
    </div>
  );
};

BookDetails.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const Book = ({
  id, title, author, category,
}) => (
  <section className="Container">
    <BookDetails id={id} title={title} author={author} category={category} />
  </section>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
