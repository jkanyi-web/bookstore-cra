import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/BookItem';
import Form from '../../components/BookForm';
import { fetchBooks } from '../../redux/features/books/booksSlice';
import './Books.css';

const Books = () => {
  const { books, status } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
    if (status === 'succeeded') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  return (
    <div className="bContainer">
      <section className="bSection">
        {books.map((item) => (
          <Book
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            category={item.category}
          />
        ))}
        <Form />
      </section>
    </div>
  );
};

export default Books;
