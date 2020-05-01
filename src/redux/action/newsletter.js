/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/* eslint-disable no-console */
import axios from 'utils/axios';
import { GET_NEWSLETTER } from './../actionTypes/newsletterTypes'

export const getNewsletter = () => async (dispatch) => {
  try {
    const res = await axios.get('v1.0/api/user/profile');
    // console.log(res.data.data.user.token);
    dispatch({
      type: GET_NEWSLETTER,
      payload: res.data.data.user,
    });
  } catch (err) {
    // eslint-disable-next-line no-unused-expressions
    // { err.message.startsWith('Network') ? dispatch(setAlert(err.message, 'danger')) : dispatch(setAlert(err.response.data.error.message, 'danger')); }
    console.log(err.response.data.error.message);

    dispatch({
      type: GET_NEWSLETTER,
      // payload: err.response.data.error.message,
    });
  }
};
