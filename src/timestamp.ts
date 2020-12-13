function padDateElement(length: number, value: string | number): string {
  const str = String(value);
  return (str.length >= length) ? str : padDateElement(length, '0' + str);
}

export default function timestamp(): string {
  const now = new Date();
  const YYYY = padDateElement(4, now.getFullYear()),
        MM = padDateElement(2, now.getMonth() + 1),
        DD = padDateElement(2, now.getDate()),
        hh = padDateElement(2, now.getHours()),
        mm = padDateElement(2, now.getMinutes()),
        ss = padDateElement(2, now.getSeconds()),
        SSS = padDateElement(3, now.getMilliseconds());
  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}.${SSS}`;
}
