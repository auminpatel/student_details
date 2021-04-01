/* eslint-disable react/react-in-jsx-scope */
import { useSelector } from 'react-redux';
import Form from './form';

function Edit() {
  const key = useSelector((state) => state.key);
  const students = useSelector((state) => state.students);
  return <Form studentValueToBeUpdated={students[key]} />;
}

export default Edit;
