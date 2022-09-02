import { areIntervalsOverlapping } from "date-fns";

const nums = [1, 7, 3, 4];

const rta = nums.some(item => item % 2 === 0);

console.log(rta);

const orderes = [
  {
    customerName: 'David',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Pedro',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Camilo',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valeria',
    total: 700,
    delivered: false,
  },
];

const rta2 = orderes.some(item => item.delivered);

console.log(rta2);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];
const newAppoinment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20, 30)
};

const isOverlap = (newDate) => {
  return dates.some(date => {
    return areIntervalsOverlapping(
        { start: date.startDate, end: date.endDate},
        { start: newDate.startDate, end: newDate.endDate},
      );
  })
};


console.log(isOverlap(newAppoinment));