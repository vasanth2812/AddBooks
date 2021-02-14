import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { addBook } from '../../../actions';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.scss';

const AddBook = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => {
    const formData = {
      id: Math.random(),
      volumeInfo: data,
    };
    dispatch(addBook([formData]));
    history.push('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-wrap">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6">
            <div>Book Name</div>
            <input
              type="text"
              name="title"
              placeholder="Book Name"
              id="book-name"
              className="form-control"
              autoComplete="off"
              ref={register({ required: true })}
            />
            {errors.title && 'Book name is required.'}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6">
            <div>Publisher</div>
            <input
              type="text"
              name="publisher"
              placeholder="Publisher"
              id="publisher-name"
              className="form-control"
              autoComplete="off"
              ref={register({ required: true })}
            />
            {errors.publisher && 'Publisher name is required.'}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6">
            <div>Published Date</div>
            <Controller
              name="publishedDate"
              control={control}
              render={({ onChange, value }) => (
                <DatePicker
                  selected={value}
                  onChange={onChange}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Published Date"
                  className="form-control"
                />
              )}
            />
            {errors.publishedDate && 'Published Date is required.'}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6">
            <div>Author</div>
            <input
              type="text"
              name="authors"
              placeholder="Author"
              id="author"
              className="form-control"
              autoComplete="off"
              ref={register({ required: true })}
            />
            {errors.authors && 'Author name is required.'}
          </div>
        </div>
        <div className="row">
          <div className="submit-btn">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
