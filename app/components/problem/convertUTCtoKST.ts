export function convertUTCtoKST(utcString: string) {
  const utcDate = new Date(utcString);

  const kstOffsetMinutes = 9 * 60;
  const utcOffsetMinutes = utcDate.getTimezoneOffset();

  const kstDate = new Date(
    utcDate.getTime() + (kstOffsetMinutes + utcOffsetMinutes) * 60 * 1000
  );

  return kstDate;
}
