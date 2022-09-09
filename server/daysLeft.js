function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  const monthsIndex = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Abr: 2,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const myDate = date.split(" ");

  const monthStr = myDate[0].slice(0, 3);

  let queryMonth = monthsIndex[monthStr];

  let queryDay = Number(myDate[1].replace(",", ""));
  let queryYear = Number(myDate[2]);

  let coreDaysLeft = 0;
  let sameMonthDaysLeft = months[queryMonth] - queryDay;
  let totalDaysLeft = 0;
  let isDone = false;

  // sameMonthDaysLeft =
  while (!isDone) {
    if (queryYear < 2021) {
      for (let i = queryMonth; i < 11; i++) {
        coreDaysLeft += months[i];
      }
      queryYear += 1;
      queryMonth = monthsIndex.Jan;
      coreDaysLeft += 31;
    } else if (queryYear === 2021) {
      for (let i = queryMonth; i < 11; i++) {
        coreDaysLeft += months[i];
      }
      totalDaysLeft = sameMonthDaysLeft + coreDaysLeft - 6;
      isDone = true;
    }

    if (queryYear > 2021) {
      sameMonthDaysLeft = queryDay;
      for (let i = queryMonth - 1; i > -1; i--) {
        coreDaysLeft += months[i];
      }
      totalDaysLeft = (coreDaysLeft + 6 + sameMonthDaysLeft) * -1;
      isDone = true;
    }
  }

  return totalDaysLeft;
}

console.log(daysToXmas("Feb 1, 2022"));
