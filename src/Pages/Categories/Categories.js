import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../../redux/features/categories/categoriesSlice';

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categoriesContainer">
      <h1 className="categoriesHeader">{categories}</h1>
      <button className="status" type="button" onClick={handleCheckStatus}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
