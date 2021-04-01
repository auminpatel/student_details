import { Add, Delete, Update, UsnKey } from './actionTypes';

export function addStudent(value) {
  return { type: Add, payload: value };
}

export function deleteStudent(value) {
  return { type: Delete, payload: value };
}

export function updateStudent(value) {
  return { type: Update, payload: value };
}

export function usnKey(value) {
  return { type: UsnKey, payload: value };
}
