export default function hasFiveMinutesPassed(createdAt) {
  const createdTime = new Date(createdAt).getTime();
  const now = Date.now();
  const fiveMinutesInMs = 5 * 60 * 1000;

  return now - createdTime < fiveMinutesInMs;
}
