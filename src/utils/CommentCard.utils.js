const formatDateAndTime = (unformattedDateAndTime) => {
  const formattedDate = unformattedDateAndTime.slice(0, 10);
  const formattedTime = unformattedDateAndTime.slice(11, 16);
  return `${formattedDate} ${formattedTime}`;
};

export default formatDateAndTime;
