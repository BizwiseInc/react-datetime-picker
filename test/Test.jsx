import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker/src/entry.nostyle';
import 'react-datetime-picker/src/DateTimePicker.less';
import 'react-calendar/src/Calendar.less';
import 'react-clock/src/Clock.less';

import ValidityOptions from './ValidityOptions';
import MaxDetailOptions from './MaxDetailOptions';
import LocaleOptions from './LocaleOptions';
import ValueOptions from './ValueOptions';
import ViewOptions from './ViewOptions';

import './Test.less';

const now = new Date();

const ariaLabelProps = {
  amPmAriaLabel: 'Select AM/PM',
  calendarAriaLabel: 'Toggle calendar',
  clearAriaLabel: 'Clear value',
  dayAriaLabel: 'Day',
  hourAriaLabel: 'Hour',
  minuteAriaLabel: 'Minute',
  monthAriaLabel: 'Month',
  nativeInputAriaLabel: 'Date and time',
  secondAriaLabel: 'Second',
  yearAriaLabel: 'Year',
};

const placeholderProps = {
  dayPlaceholder: 'dd',
  hourPlaceholder: 'hh',
  minutePlaceholder: 'mm',
  monthPlaceholder: 'mm',
  secondPlaceholder: 'ss',
  yearPlaceholder: 'yyyy',
};

/* eslint-disable no-console */

const nineteenNinetyFive = new Date(1995, now.getUTCMonth() + 1, 15, 12);
const fifteenthOfNextMonth = new Date(now.getUTCFullYear(), now.getUTCMonth() + 1, 15, 12);

export default function Test() {
  const [disabled, setDisabled] = useState(false);
  const [locale, setLocale] = useState(null);
  const [maxDate, setMaxDate] = useState(fifteenthOfNextMonth);
  const [maxDetail, setMaxDetail] = useState('minute');
  const [minDate, setMinDate] = useState(nineteenNinetyFive);
  const [required, setRequired] = useState(true);
  const [showLeadingZeros, setShowLeadingZeros] = useState(true);
  const [showNeighboringMonth, setShowNeighboringMonth] = useState(false);
  const [showWeekNumbers, setShowWeekNumbers] = useState(false);
  const [value, setValue] = useState(now);

  return (
    <div className="Test">
      <header>
        <h1>react-datetime-picker test page</h1>
      </header>
      <div className="Test__container">
        <aside className="Test__container__options">
          <MaxDetailOptions maxDetail={maxDetail} setMaxDetail={setMaxDetail} />
          <ValidityOptions
            maxDate={maxDate}
            minDate={minDate}
            required={required}
            setMaxDate={setMaxDate}
            setMinDate={setMinDate}
            setRequired={setRequired}
          />
          <LocaleOptions locale={locale} setLocale={setLocale} />
          <ValueOptions setValue={setValue} value={value} />
          <ViewOptions
            disabled={disabled}
            setDisabled={setDisabled}
            setShowLeadingZeros={setShowLeadingZeros}
            setShowNeighboringMonth={setShowNeighboringMonth}
            setShowWeekNumbers={setShowWeekNumbers}
            showLeadingZeros={showLeadingZeros}
            showNeighboringMonth={showNeighboringMonth}
            showWeekNumbers={showWeekNumbers}
          />
        </aside>
        <main className="Test__container__content">
          <form
            onSubmit={(event) => {
              event.preventDefault();

              console.warn('DateTimePicker triggered submitting the form.');
              console.log(event);
            }}
          >
            <DateTimePicker
              {...ariaLabelProps}
              {...placeholderProps}
              calendarClassName="myCustomCalendarClassName"
              className="myCustomTimePickerClassName"
              clockClassName="myCustomClockClassName"
              disabled={disabled}
              locale={locale}
              maxDate={maxDate}
              maxDetail={maxDetail}
              minDate={minDate}
              name="myCustomName"
              onCalendarClose={() => console.log('Calendar closed')}
              onCalendarOpen={() => console.log('Calendar opened')}
              onChange={setValue}
              onClockClose={() => console.log('Clock closed')}
              onClockOpen={() => console.log('Clock opened')}
              required={required}
              showLeadingZeros={showLeadingZeros}
              showNeighboringMonth={showNeighboringMonth}
              showWeekNumbers={showWeekNumbers}
              value={value}
            />
            <br />
            <br />
            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
