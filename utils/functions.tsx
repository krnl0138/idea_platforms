import moment from "moment";
import "moment/locale/ru";

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
      "мая",
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
  return moment(date, "DD.MM.YY").format("D MMM YYYY, dd");
};

export const isIE11Context = () => window["msCrypto"];
