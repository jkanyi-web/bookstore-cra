import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/features/categories/categoriesSlice';
import './Categories.css';

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="container">
      <h1 className="header">{categories}</h1>
      <button className="check" type="button" onClick={handleCheckStatus}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
