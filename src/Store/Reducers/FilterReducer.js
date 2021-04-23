import * as types from '../Actions/types';

const initalState = {
  query: '',
  maxSalary: null,
  minSalary: null,
  city: 'Shahar..',
  experience: [],
  workType: [],
  filterOn: false,
};

const filterReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.CHANGE_FILTER_ITEMS:
      let filterOn = false
      const { query, maxSalary, minSalary, city, experience, workType } = action.payload
      if(query || maxSalary || minSalary || city || experience.length > 0 || workType.length > 0){
        filterOn = true
      }
      return { query, maxSalary, minSalary, city, experience, workType, filterOn };
    case types.CLEAR_FILTER_ITEMS:
      return { ...initalState };
    default:
      return state;
  }
};

export default filterReducer;
