function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const monthIndex = date.getMonth()

  let queryDay = date.getDate()
  let queryYear = date.getFullYear()
  console.log(queryYear);

  let coreDaysLeft = 0;
  let sameMonthDaysLeft = months[monthIndex] - queryDay;
  let totalDaysLeft = 0;
  let isDone = false;

  // sameMonthDaysLeft =
  while (!isDone) {
    if (queryYear < 2021) {
      for (let i = monthIndex; i < 11; i++) {
        coreDaysLeft += months[i];
      }
      queryYear += 1;
      monthIndex = 0;
      coreDaysLeft += 31;
    } else if (queryYear === 2021) {
      for (let i = monthIndex; i < 11; i++) {
        coreDaysLeft += months[i];
      }
      totalDaysLeft = sameMonthDaysLeft + coreDaysLeft - 6;
      isDone = true;
    }

    if (queryYear > 2021) {
      sameMonthDaysLeft = queryDay;
      for (let i = monthIndex - 1; i > -1; i--) {
        coreDaysLeft += months[i];
      }
      totalDaysLeft = (coreDaysLeft + 6 + sameMonthDaysLeft) * -1;
      isDone = true;
    }
  }

  return totalDaysLeft;
}

const myDate = new Date("1/1/22")

console.log(myDate);

console.log(daysToXmas(myDate));
