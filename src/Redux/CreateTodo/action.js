import {
  ADD_DATE,
  ADD_DESCRIPTION,
  ADD_PROGRESS,
  ADD_SUBTASK,
  ADD_TAGS,
  ADD_TITLE,
} from './actionTypes';

export const addTitle = (payload) => {
  return {
    type: ADD_TITLE,
    payload,
  };
};

export const addDescription = (payload) => {
  return {
    type: ADD_DESCRIPTION,
    payload,
  };
};

export const addSubtask = (payload) => {
  return {
    type: ADD_SUBTASK,
    payload,
  };
};

export const addDate = (payload) => {
  return {
    type: ADD_DATE,
    payload,
  };
};

export const addProgress = (payload) => {
  return {
    type: ADD_PROGRESS,
    payload,
  };
};

export const addTags = (payload) => {
  return {
    type: ADD_TAGS,
    payload,
  };
};
