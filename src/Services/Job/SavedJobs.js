import Api from '../../Config/Api';
import { getToken } from '../Token/handleToken'

const save = async (payload) => {
  const token = await getToken()
  const { JobId } = payload
  return Api.get(`/private/savedJobs/save?JobId=${JobId}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    }
  })
    .then((response) => response.data);
};

const unsave = async (payload) => {
  const token = await getToken()
  const { JobId } = payload
  return Api.get(`/private/savedJobs/unsave?JobId=${JobId}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    }
  })
    .then((response) => response.data);
};

const getSaved = async () => {
  const token = await getToken()
  return Api.get(`/private/savedJobs/getAll`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    }
  })
    .then((response) => response.data);
};

export default {
  save,
  unsave,
  getSaved,
}