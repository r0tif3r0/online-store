const days = [
  'Воскресенье', 
  'Понедельник', 
  'Вторник', 
  'Среда', 
  'Четверг', 
  'Пятница', 
  'Суббота',
]

const months = [
  'Января', 
  'Февраля', 
  'Марта', 
  'Апреля', 
  'Мая', 
  'Июня', 
  'Июля', 
  'Августа', 
  'Сентября', 
  'Октября', 
  'Ноября', 
  'Декабря',
]

const getExtraDays = (weekDay) => {
  if (weekDay === 0) {
    return 6;
  } else {
    return weekDay - 1;
  }
}

export const getDayInfo = (date) => {
  const splittedDate = date.split('.');
  const tmpDate = new Date(splittedDate[2], splittedDate[1] - 1, splittedDate[0]);

  const weekDay = days[tmpDate.getDay()];

  const firstMonthDay = new Date(splittedDate[2], splittedDate[1] - 1, 1);
  const weekNum = Math.ceil((tmpDate - new Date(
    splittedDate[2],
    splittedDate[1] - 1,
    -getExtraDays(firstMonthDay.getDay())
    )) / (1000 * 60 * 60 * 24 * 7));
  
  const month = months[tmpDate.getMonth()];
  const year = tmpDate.getFullYear();

  return `${weekDay}, ${weekNum} неделя ${month} ${year} года`;
}
