/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

function isWeekend(day: string): void {
  if (
    day === 'monday' ||
    'Tuesday ' ||
    'Wednesday ' ||
    'Thursday ' ||
    'Friday '
  ) {
    return console.log('work day');
  } else {
    return console.log('weekend day');
  }
}
