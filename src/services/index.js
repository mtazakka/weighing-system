import { queryToString } from '../utils';

const Fetch = async (method, endpoint, options) => {
  const { body, credentials = true, toLogin = true } = options || {};
  const option = { method, headers: {} };

  if (method !== 'GET') {
    option.body = JSON.stringify(body);
    option.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  if (credentials) {
    const token = localStorage.getItem('token');
    if (token) {
      option.headers.Authorization = `Bearer ${token}`;
    } else {
      throw new Error('No authorization token found');
    }
  }

  const res = await fetch(`${import.meta.env.VITE_APP_URL}${endpoint}`, option);

  let resJson;
  try {
    resJson = await res.json();
  } catch (err) {
    throw new Error(`${res.status}, ${res.statusText}` || 'server error');
  }

  if (res.status === 401) {
    if (toLogin) {
      setTimeout(() => {
        localStorage.removeItem('token');
        window.location.replace('/login');
      }, 1000);
    }
    throw new Error(resJson.errors);
  }
  if (res.status >= 200 && res.status < 300) {
    return resJson;
  }
  throw new Error(`${resJson.errors}` || 'server error');
};

// export const getMasters = (query) =>
//   Fetch('GET', `/api/masters?${queryToString(query)}`);
// export const getNodes = (query) =>
//   Fetch('GET', `/api/nodes?${queryToString(query)}`);
// export const getSchedules = (idMaster) =>
//   Fetch('GET', `/api/server-time/schedule/${idMaster}`);

// export const patchNode = (id, body) =>
//   Fetch('PATCH', `/api/nodes/${id}`, {
//     body,
//   });
// export const patchNodes = (id, body) =>
//   Fetch('PATCH', `/api/masters/${id}`, {
//     body,
//   });

export const postLogin = (body) =>
  Fetch('POST', `/api/users/login`, {
    body,
    credentials: false,
    toLogin: false,
  });
// export const postSchedule = (body) =>
//   Fetch('POST', `/api/server-time/schedule`, {
//     body,
//   });
