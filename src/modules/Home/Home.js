import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkeletonProduct from '../../shared/components/Skeleton/SkeletonProduct';
import { fetchBooks } from '../../actions';
import './Home.scss';
import Card from '../../shared/components/Card';
import Alert from '../../shared/components/Alerts/Alert';
import { allbooksSelector } from '../../reducers/books';

const Home = () => {
  const dispatch = useDispatch();

  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState(false);

  const bookList = useSelector((state) => allbooksSelector(state));

  useEffect(() => {
    dispatch(fetchBooks()).catch(() => {
      setErrors(true);
    });
  }, [dispatch]);

  useEffect(() => {
    setBooks(bookList);
  }, [bookList]);

  const skeletonProductList = [...Array(12)].map((i) => (
    <div key={i} className="col-sm-12 col-md-4 col-lg-4 col-xs-3 mg-bottom-10">
      <SkeletonProduct />
    </div>
  ));

  const booksList = books.map((book) => (
    <div
      key={book.id}
      className="col-sm-12 col-md-4 col-lg-4 col-xs-3 mg-bottom-10"
    >
      <Card data={book.volumeInfo} />
    </div>
  ));
  return (
    <div className="container">
      {!!errors && (
        <div className="alert-error">
          <Alert title="Something went wrong" color="danger" />
        </div>
      )}
      <div className="row">
        <>{books && books.length ? booksList : skeletonProductList}</>
      </div>
    </div>
  );
};

export default Home;
