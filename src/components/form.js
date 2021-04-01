/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/react-in-jsx-scope */
import './form.css';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addStudent, updateStudent } from '../redux/action';
import formValidation from '../helper/formValidation';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  date: '',
  city: '',
  phone: '',
  usn: '',
};

const fieldsValidation = {
  firstName: {
    error: '',
    validate: 'text',
    minLength: 2,
    maxLength: 20,
  },
  lastName: {
    error: '',
    validate: 'text',
    minLength: 2,
    maxLength: 20,
  },
  email: {
    error: '',
    validate: 'email',
  },
  gender: {},
  date: {},
  city: {
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20,
  },
  phone: {
    error: '',
    validate: 'phone',
    maxLength: 15,
  },
  usn: {
    error: '',
    validate: 'usn',
    minLength: 10,
    maxLength: 10,
  },
};

const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const maxNumber = { maxLength: 10 };

function Form({ studentValueToBeUpdated = false }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(studentValueToBeUpdated || initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleReset = () => {
    setFormValues(studentValueToBeUpdated || initialValues);
  };

  const handleSubmit = () => {
    studentValueToBeUpdated
      ? dispatch(updateStudent(formValues))
      : dispatch(addStudent(formValues));
    handleReset();
    studentValueToBeUpdated && history.push({ pathname: '/details' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = formValidation(name, value, fieldsValidation) || '';

    setFormErrors({
      [name]: error,
    });
  };

  const { firstName, lastName, email, gender, date, city, phone, usn } = formValues;

  const isValid =
    firstName.length > 0 &&
    !formErrors.firstName &&
    lastName.length > 0 &&
    !formErrors.lastName &&
    email.length > 0 &&
    !formErrors.email &&
    gender.length > 0 &&
    city.length > 0 &&
    !formErrors.city &&
    date.length > 0 &&
    phone.length > 0 &&
    !formErrors.phone &&
    usn.length > 0 &&
    !formErrors.usn;

  const title = `${studentValueToBeUpdated ? 'Edit' : 'Add'} Student Details`;

  return (
    <div className="form">
      <form>
        <Paper elevation={2} className="paper">
          <h2 className="formTitle">{title}</h2>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                type="text"
                label="First Name"
                name="firstName"
                fullWidth
                required
                value={firstName || ''}
                onChange={handleChange}
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                type="text"
                label="Last Name"
                fullWidth
                name="lastName"
                required
                value={lastName || ''}
                onChange={handleChange}
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                type="email"
                label="Email"
                name="email"
                required
                fullWidth
                value={email || ''}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                label="Phone Number"
                name="phone"
                required
                fullWidth
                value={phone || ''}
                onChange={handleChange}
                inputProps={maxNumber}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="standard-basic"
                select
                name="gender"
                label="Gender"
                value={gender || ''}
                onChange={handleChange}
                helperText="Please select your Gender"
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="date"
                label="Birthday"
                type="date"
                name="date"
                value={date || '1999-12-31'}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="standard-basic"
                label="Unversity Number"
                type="text"
                name="usn"
                value={usn || ''}
                onChange={handleChange}
                error={!!formErrors.usn}
                helperText={formErrors.usn}
                disabled={!!studentValueToBeUpdated}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                type="text"
                label="City"
                name="city"
                fullWidth
                required
                value={city || ''}
                onChange={handleChange}
                error={!!formErrors.city}
                helperText={formErrors.city}
              />
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button type="button" variant="contained" onClick={handleReset}>
                Reset
              </Button>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!isValid}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

export default Form;
