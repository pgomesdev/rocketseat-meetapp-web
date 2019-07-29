import produce from 'immer';
import { MEETUP_LOAD } from './actions';

const INITIAL_STATE = {};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, () => {
    switch (action.type) {
      case MEETUP_LOAD:
        return action.payload.data.reduce(
          (acc, { id, ...rest }) => ({
            ...acc,
            [id]: rest,
          }),
          {}
        );
      default:
        return state;
    }
  });
}
