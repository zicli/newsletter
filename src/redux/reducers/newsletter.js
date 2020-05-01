import { GET_NEWSLETTER } from '../actionTypes/newsletterTypes';

const initialState = {
  newsletter: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWSLETTER:
      return {
        ...state,
        newsletter: payload,
        loading: false,
      };
    default:
      return state;
  }
}
