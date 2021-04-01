/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const initialState = {
  students: {},
  key: undefined,
};

function updateStudents(stud, usn) {
  return Object.keys(stud).reduce((object, key) => {
    if (key !== usn) {
      object[key] = stud[key];
    }
    return object;
  }, {});
}

function addReducer(state = initialState, action) {
  const { students } = state;
  switch (action.type) {
    case 'Add':
      students[action.payload.usn] = action.payload;
      return { students };
    case 'Delete':
      return { students: updateStudents(students, action.payload.usn) };
    case 'Update':
      students[action.payload.usn] = action.payload;
      return { students };
    case 'UsnKey':
      return { ...state, key: action.payload };
    default:
      return state;
  }
}

export default addReducer;
