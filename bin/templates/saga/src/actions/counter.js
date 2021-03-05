export const INCREASE = "INCREASE";
export const ASYNC_INCREASE = "ASYNC_INCREASE";
export const DESCREASE = "DESCREASE";

export const counterActionCreators = {
  [INCREASE]() {
    return {
      type: INCREASE,
    };
  },
  [DESCREASE]() {
    return {
      type: DESCREASE,
    };
  },
  [ASYNC_INCREASE]() {
    return {
      type: ASYNC_INCREASE,
    };
  },
};
