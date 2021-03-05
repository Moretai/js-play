export const INCREASE = "INCREASE";
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
};
