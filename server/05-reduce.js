const totals = [1, 2, 3, 4];

const sum = totals.reduce((a, item) => a + item, 0);
console.log(sum);

const nums = [1, 5, 5, 3, 3, 5];

const numsCounter = nums.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }

  return obj;
}, {});

console.log(numsCounter);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "high",
  },
  {
    name: "David",
    level: "high",
  },
  {
    name: "Diego",
    level: "high",
  },
  {
    name: "Santiago",
    level: "high",
  },
  {
    name: "Pedro",
    level: "low",
  },
];

const levels = data.map((item) => item.level);

const dataReduced = levels.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] += 1;
  }

  return obj;
}, {});

console.log(dataReduced);

const dataNew = data.reduce((obj, item) => {
  if (!obj[item.level]) {
    obj[item.level] = 1;
  } else {
    obj[item.level] += 1;
  }

  return obj;
}, {});

console.log(dataNew);

const numArr = [];

for (let i = 0; i < 11; i++) {
  const num = Math.floor(Math.random() * 11);
  numArr.push(num);
}

const ranges = numArr.reduce(
  (obj, item) => {
    if (item < 6) obj["1 - 5"] += 1;
    else if (item < 9) obj["6 - 8"] += 1;
    else obj["9 - 10"] += 1;

    return obj;
  },
  {
    "1 - 5": 0,
    "6 - 8": 0,
    "9 - 10": 0,
  }
);
console.log(numArr);

console.log(ranges);
