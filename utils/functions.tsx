import moment from "moment";

export const formatWordEnding = (n: number) => {
  if (n === 1) return `${n} пересадка`;
  if (n > 1 && n < 5) return `${n} пересадки`;
  return `${n} пересадoк`;
};

export const makeNaturalDate = (date: string) => {
  moment.updateLocale("ru", {
    monthsShort: [
      "янв",
      "фев",
      "мар",
      "апр",
      "май",
      "июн",
      "июл",
      "авг",
      "сен",
      "окт",
      "нов",
      "дек",
    ],
    weekdaysMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
  });
  return moment(date).format("D MMM YYYY, dd");
  // return moment.monthsShort();
};
