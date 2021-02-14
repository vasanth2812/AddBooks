import { schema } from 'normalizr';

const bookSchema = new schema.Entity('books', {}, { idAttribute: 'id' });

export default bookSchema;
