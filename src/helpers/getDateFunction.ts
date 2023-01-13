const getDateFunction = (date: Date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dateNumber = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${dateNumber}, ${year}`;
};

export default getDateFunction;
