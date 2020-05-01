/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import axios from 'axios';
import { GET_NEWSLETTER } from '../actionTypes/newsletterTypes';

export const getNewsletter = () => async (dispatch) => {
  try {
    const response = await axios.post('https://zicli-newsletter.herokuapp.com/graphql');
    return console.log(response);
    // dispatch({
    //   type: GET_NEWSLETTER,
    //   payload: res.data.data.user,
    // });
  } catch (err) {
    // eslint-disable-next-line no-unused-expressions
    // { err.message.startsWith('Network') ? dispatch(setAlert(err.message, 'danger')) : dispatch(setAlert(err.response.data.error.message, 'danger')); }
    console.log(err.response);

    // dispatch({
    //   type: GET_NEWSLETTER,
    //   // payload: err.response.data.error.message,
    // });
  }
};
