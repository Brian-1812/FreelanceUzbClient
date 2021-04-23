import * as types from './types';

export const enableLoader = () => ({
  type: types.GENERAL_ENABLE_LOADER,
});

export const disableLoader = () => ({
  type: types.GENERAL_DISABLE_LOADER,
});

// Fetch listed jobs
export const fetchListedJobsRequest = (payload) => ({
  type: types.LISTED_JOBS_FETCH_REQUEST,
  payload,
});

// filtered
export const fetchFilteredJobsRequest = (payload) => ({
  type: types.LISTED_JOBS_FILTERED_FETCH_REQUEST,
  payload,
});

export const fetchListedJobsResponse = (payload) => ({
  type: types.LISTED_JOBS_FETCH_RESPONSE,
  payload,
});

export const refreshListedJobsResponse = (payload) => ({
  type: types.LISTED_JOBS_FETCH_REFRESH_RESPONSE,
  payload,
});

export const fetchListedJobsFailure = (payload) => ({
  type: types.LISTED_JOBS_FETCH_FAILURE,
  payload,
});

// post a job
export const jobPostRequest = (payload) => ({
  type: types.JOB_POST_REQUEST,
  payload,
});

export const jobPostResponse = (payload) => ({
  type: types.JOB_POST_RESPONSE,
  payload,
});

export const jobPostFailure = (payload) => ({
  type: types.JOB_POST_FAILURE,
  payload,
});

// Save a job
export const saveJobRequest = (payload) => ({
  type: types.SAVE_JOB_REQUEST,
  payload,
});

export const saveJobResponse = () => ({
  type: types.SAVE_JOB_RESPONSE,
  payload,
});

export const saveJobFailure = () => ({
  type: types.SAVE_JOB_FAILURE,
  payload,
});

// Get saved Jobs
export const fetchSavedJobsRequest = () => ({
  type: types.SAVED_JOBS_FETCH_REQUEST,
});

export const fetchSavedJobsResponse = (payload) => ({
  type: types.SAVED_JOBS_FETCH_RESPONSE,
  payload,
});

export const fetchSavedJobsFailure = (payload) => ({
  type: types.SAVED_JOBS_FETCH_FAILURE,
  payload,
});

// Get My own jobs
export const fetchMyJobsRequest = () => ({
  type: types.FETCH_MY_JOBS_REQUEST,
});

export const fetchMyJobsResponse = (payload) => ({
  type: types.FETCH_MY_JOBS_RESPONSE,
  payload,
});

export const fetchMyJobsFailure = (payload) => ({
  type: types.FETCH_MY_JOBS_FAILURE,
  payload,
});