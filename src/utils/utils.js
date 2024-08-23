export const randomDate = () => {
  const date = new Date(
    Math.random() * (Date.now() - 10000000000) + 10000000000
  );
  return date;
};

export const randomBoolean = () => {
  return Math.random() < 0.5 ? 1 : 0;
};

export const getFirstLetter = (text) => {
  return text.charAt(0);
};

export const formatDateToDayMonthYearHoursMinutes = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export function formatDateToDayNameMonthDateYear(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const fullDateOptions = { month: "long", day: "2-digit", year: "numeric" };
  const dayOptions = { weekday: "long" };

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return `Today, ${date.toLocaleDateString("en-US", fullDateOptions)}`;
  }

  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    return `Yesterday, ${date.toLocaleDateString("en-US", fullDateOptions)}`;
  }

  return `${date.toLocaleDateString(
    "en-US",
    dayOptions
  )}, ${date.toLocaleDateString("en-US", fullDateOptions)}`;
}

export const formatDateToHoursMinutes = (date) => {
  const dateString = date.toISOString();
  const [, timeValue] = dateString.split("T");
  const [hours, minutes] = timeValue.split(":").slice(0, 2);
  return `${hours}:${minutes}`;
};

export const getUserTextColor = (userId) => {
  const colors = ["#E5A443", "#9B51E0", "#43B78D"];
  return colors[(userId - 1) % colors.length];
};

export const getUserChatColor = (userId) => {
  const colors = ["#FCEED3", "#EEDCFF", "#D2F2EA"];
  return colors[(userId - 1) % colors.length];
};
