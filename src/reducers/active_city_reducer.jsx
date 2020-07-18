export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  //TODO handle actions
  // if (action.type === 'CITY_SELECTED') {
  //   return action.payload;
  // } else {
  //   return state;
  // }
  switch (action.type) {
    case 'CITY_SELECTED': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
