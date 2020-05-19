import * as React from 'react';

import { Omit } from '@material-ui/core';
import BasePicker, { BasePickerProps } from '../_shared/BasePicker';
import { ExtendWrapper } from '../wrappers/ExtendWrapper';
import InlineWrapper, { OuterInlineWrapperProps } from '../wrappers/InlineWrapper';
import Calendar from './components/Calendar';
import DatePicker, { BaseDatePickerProps } from './DatePicker';

export interface DatePickerInlineProps
  extends Omit<BasePickerProps, 'ampm'>,
    BaseDatePickerProps,
    ExtendWrapper<OuterInlineWrapperProps> {
  onlyCalendar?: boolean;
  clearable?: boolean;
  clearLabel?: React.ReactNode;
  todayLabel?: React.ReactNode;
  showTodayButton?: boolean;
}

export const DatePickerInline: React.SFC<DatePickerInlineProps> = props => {
  const {
    clearable,
    clearLabel,
    todayLabel,
    showTodayButton,
    allowKeyboardControl,
    animateYearScrolling,
    disableFuture,
    disablePast,
    format,
    forwardedRef,
    labelFunc,
    leftArrowIcon,
    maxDate,
    minDate,
    initialFocusedDate,
    onChange,
    openToYearSelection,
    renderDay,
    rightArrowIcon,
    shouldDisableDate,
    value,
    autoOk,
    onlyCalendar,
    views,
    openTo,
    ...other
  } = props;

  const ComponentToShow: any = onlyCalendar ? Calendar : DatePicker;

  return (
    <BasePicker {...props} autoOk>
      {({
        date,
        utils,
        isAccepted,
        handleChange,
        handleClear,
        handleTextFieldChange,
        handleSetTodayDate,
        handleAccept,
      }) => (
        <InlineWrapper
          clearable={clearable}
          clearLabel={clearLabel}
          showTodayButton={showTodayButton}
          todayLabel={todayLabel}
          disableFuture={disableFuture}
          disablePast={disablePast}
          format={format || utils.dateFormat}
          labelFunc={labelFunc}
          maxDate={maxDate}
          minDate={minDate}
          onChange={handleTextFieldChange}
          innerRef={forwardedRef}
          value={value}
          isAccepted={isAccepted}
          handleAccept={handleAccept}
          onClear={handleClear}
          onSetToday={handleSetTodayDate}
          {...other}
        >
          <ComponentToShow
            date={date}
            views={views}
            openTo={openTo}
            allowKeyboardControl={allowKeyboardControl}
            animateYearScrolling={animateYearScrolling}
            disableFuture={disableFuture}
            disablePast={disablePast}
            leftArrowIcon={leftArrowIcon}
            maxDate={maxDate}
            minDate={minDate}
            onChange={handleChange}
            onClear={handleClear}
            openToYearSelection={openToYearSelection}
            renderDay={renderDay}
            rightArrowIcon={rightArrowIcon}
            shouldDisableDate={shouldDisableDate}
          />
          {/* <DialogActions
      classes={{
        root: clearable || showTodayButton ? classes.dialogActions : undefined,
        action: clsx(classes.dialogAction, {
          [classes.clearableDialogAction]: clearable,
          [classes.todayDialogAction]: !clearable && showTodayButton,
        }),
      }}
    > */}
          {/* {clearable && (
        <Button color="primary" onClick={handleClear}>
          {clearLabel}
        </Button>
      )} */}

          {/* {!clearable &&
        showTodayButton && (
          <Button color="primary" onClick={onSetToday}>
            {todayLabel}
          </Button>
        )}

      <Button color="primary" onClick={onDismiss}>
        {cancelLabel}
      </Button>

      <Button color="primary" onClick={onAccept}>
        {okLabel}
      </Button> */}
          {/* </DialogActions> */}
        </InlineWrapper>
      )}
    </BasePicker>
  );
};

DatePickerInline.defaultProps = {
  views: ['year', 'day'],
  clearable: false,
  clearLabel: 'Clear',
  todayLabel: 'Today',
  showTodayButton: true,
};

export default React.forwardRef((props: DatePickerInlineProps, ref) => (
  <DatePickerInline {...props} forwardedRef={ref} />
));
