import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { postBooks } from '../redux/features/books/booksSlice';

const BookForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: '', author: '', category: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const { title, author, category } = formData;
    if (!title || !author || !category) {
      return;
    }
    dispatch(
      postBooks({
        item_id: uniqid(),
        title,
        author,
        category,
      }),
    );
    setFormData({ title: '', author: '', category: '' });
  };

  return (
    <section className="fContainer">
      <h2 className="header">Add New Book</h2>
      <form className="bForm" onSubmit={handleAddBook}>
        <input
          className="title"
          type="text"
          placeholder="Book title"
          required
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          required
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
        <select
          className="category"
          id="category"
          required
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Category
          </option>
          <option value="History">History</option>
          <option value="Programming">Programming</option>
          <option value="Business">Business</option>
          <option value="Self Help">Self Help</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
        </select>
        <button className="add" type="submit">
          Add Book
        </button>
      </form>
    </section>
  );
};

export default BookForm;
