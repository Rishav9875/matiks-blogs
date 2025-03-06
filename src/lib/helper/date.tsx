export function formatDate(isoString: string) {
  const date = new Date(isoString);
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "short" };
  if (date.getFullYear() !== now.getFullYear()) {
    options.year = "2-digit";
  }

  return date.toLocaleDateString("en-GB", options).toUpperCase();
}