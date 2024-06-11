export const formatDate = (date: string) => {
  if (!date) return "";
  const formattedDate = new Date(date);
  const month = formattedDate.toLocaleDateString("en-US", { month: "long" });
  const day = formattedDate.toLocaleDateString("en-US", { day: "numeric" });
  const year = formattedDate.toLocaleDateString("en-US", { year: "numeric" });
  return `${month} ${day}, ${year}`;
};
