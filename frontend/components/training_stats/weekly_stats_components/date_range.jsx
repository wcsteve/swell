import React from 'react';


const DateRange = (props) => {
  const {startSunday} = props

  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC'
  ];

  const endOfWeekDate = new Date(startSunday)
  endOfWeekDate.setDate(endOfWeekDate.getDate() + 6)

  const month = months[(startSunday).getMonth()]
  let nextMonth = ''
  if (endOfWeekDate.getMonth() !== (startSunday).getMonth()) {
    nextMonth = `${months[endOfWeekDate.getMonth()]} `
  }
  const day = (startSunday).getDate()
  const endDay = (endOfWeekDate).getDate()

  return (
    <React.Fragment>
      <h4 className='date-range'>{month} {day}-{nextMonth}{endDay}</h4>
    </React.Fragment>
  )
}

export default DateRange;
