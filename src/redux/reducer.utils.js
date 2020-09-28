export const updateState = (oldState, newProps) => {
  return {
    ...oldState,
    ...newProps,
  };
};
