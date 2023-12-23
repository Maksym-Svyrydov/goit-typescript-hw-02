/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  monday = 'Monday',
  tuesday = 'Tuesday ',
  wednesday = 'Wednesday ',
  thursday = 'Thursday ',
  friday = 'Friday ',
  saturday = 'Saturday',
  sunday = 'Sunday',
}
function isWeekend(day: Day): boolean {
  if ((day = Day.monday || Day.tuesday)) {
    return false;
  }
  if ((day = Day.wednesday || Day.thursday)) {
    return false;
  }
  if ((day = Day.friday)) {
    return false;
  }
  if ((day = Day.saturday || Day.sunday)) {
    return true;
  }

  return false;
}
