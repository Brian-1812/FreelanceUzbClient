import Api from '../../Config/Api';
import { getToken } from '../Token/handleToken'

export const getAll = async (payload) => {
  const { page, limit } = payload
  return Api.get(`/public/jobs/getAll?page=${page}&limit=${limit}`)
    .then((response) => response.data);
};

export const getFiltered = async (payload) => {
  const { 
    page, limit, query, maxSalary, minSalary, city, experience, workType
  } = payload
  return Api.get(
    `/public/jobs/filter?page=${encode(page)}&limit=${encode(limit)}&query=${encode(query)}&maxSalary=${encode(maxSalary)}&minSalary=${encode(minSalary)}&city=${encode(city)}&experience=${JSON.stringify(experience)}&workType=${JSON.stringify(workType)}`
  )
    .then((response) => response.data);
};

export const getMine = async () => {
  const token = await getToken()
  return Api.get(`/private/jobs/user`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    }
  })
    .then((response) => response.data);
};

const encode = (data) => {
  let encoded = data
  if(typeof data === 'string'){
    encoded = encodeURIComponent(data.toLowerCase())
  }
  return encoded;
};
