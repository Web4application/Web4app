export function calculateTip(amount, percentage, people) {
  // Validate amount
  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount < 0) {
    throw new TypeError('amount must be a finite non-negative number');
  }

  // Validate and normalize percentage
  let rate = 0;
  if (typeof percentage === 'number' && Number.isFinite(percentage)) {
    rate = percentage;
    if (rate < 0) rate = 0;
  } else {
    rate = 0;
  }

  const tipRaw = amount * (rate / 100);
  let total = amount + tipRaw;

  const roundTwo = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

  const tip = roundTwo(tipRaw);
  total = roundTwo(total);

  let perPerson;
  if (typeof people === 'undefined' || people === null) {
    perPerson = total;
  } else {
    if (typeof people !== 'number' || !Number.isFinite(people)) {
      throw new TypeError('people must be a finite number');
    }
    const count = Math.max(1, Math.floor(people));
    perPerson = roundTwo(total / count);
  }

  return { tip, total, perPerson };
}