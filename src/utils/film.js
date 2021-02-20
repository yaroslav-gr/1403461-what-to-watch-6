export const formatRunTime = function (time) {
  if (time / 60 > 0) {
    const hours = Math.trunc(time / 60);
    const minutes = ((time / 60 - hours) * 60).toFixed(0);
    return `${hours}h ${minutes}m`;
  } else {
    return `0h ${time}m`;
  }
};
