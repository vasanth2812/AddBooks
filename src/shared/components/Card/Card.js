import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';
import './Card.scss';

const BookCard = ({ data }) => {
  const { title, publisher, publishedDate, authors } = data;
  return (
    <>
      <div className="card-wrap">
        <Card>
          <div className="v1" />
          <CardBody>
            <CardTitle tag="h5" title={title}>
              {title}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {`publisher: ${publisher}`}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {`publishedDate: ${publishedDate}`}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {`authors: ${authors.toString()}`}
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

BookCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    publishedDate: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default BookCard;
