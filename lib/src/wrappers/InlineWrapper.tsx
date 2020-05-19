import { Omit } from '@material-ui/core';
import Popover, { PopoverProps as PopoverPropsType } from '@material-ui/core/Popover';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import EventListener from 'react-event-listener';
import DateTextField, { DateTextFieldProps } from '../_shared/DateTextField';
import { DIALOG_WIDTH, DIALOG_WIDTH_WIDER } from '../constants/dimensions';
import Button from '@material-ui/core/Button';
import { createStyles } from '@material-ui/core/styles';

export interface OuterInlineWrapperProps extends Omit<DateTextFieldProps, 'utils' | 'onClick'> {
  wider?: boolean;
  /** On open callback */
  onOpen?: () => void;
  /** On close callback */
  onClose?: () => void;
  /** Dialog props passed to material-ui Dialog */
  PopoverProps?: Partial<PopoverPropsType>;
  onClear?: () => void;
  onSetToday?: () => void;
}

export interface InlineWrapperProps extends OuterInlineWrapperProps {
  handleAccept: () => void;
  isAccepted: boolean;
  /** Show only calendar for datepicker in popover mode */
  onlyCalendar: boolean;
  clearable?: boolean;
  clearLabel?: React.ReactNode;
}

export class InlineWrapper extends React.PureComponent<
  InlineWrapperProps & WithStyles<typeof styles>
> {
  public static propTypes: any = {
    clearable: PropTypes.bool,
    clearLabel: PropTypes.object,

    onlyCalendar: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    PopoverProps: PropTypes.object,

    onClear: PropTypes.func,
    showTodayButton: PropTypes.bool,
    todayLabel: PropTypes.object,
  };

  public static defaultProps = {
    value: new Date(),
    onlyCalendar: false,
    isAccepted: false,
    clearable: false,
    clearLabel: 'Clear',
    showTodayButton: false,
    todayLabel: 'Today',
  };

  public static getDerivedStateFromProps(nextProps: InlineWrapperProps) {
    // only if accept = true close the popover
    if (nextProps.isAccepted) {
      if (nextProps.onClose) {
        nextProps.onClose();
      }

      return {
        anchorEl: null,
      };
    }

    return null;
  }

  public state = {
    anchorEl: null,
  };

  public open = (e: React.SyntheticEvent) => {
    this.setState({ anchorEl: e.currentTarget });
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  };

  public close = () => {
    this.setState({ anchorEl: null });

    this.props.handleAccept();

    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  public handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Enter': {
        this.props.handleAccept();
        this.close();
        break;
      }
      default:
        // if key is not handled, stop execution
        return;
    }

    // if event was handled prevent other side effects
    event.preventDefault();
  };
  public handleClear = () => {
    this.close();
    if (this.props.onClear) {
      this.props.onClear();
    }
  };

  public render() {
    const {
      clearable,
      clearLabel,
      onClear,
      showTodayButton,
      todayLabel,
      onSetToday,
      value,
      format,
      children,
      onOpen,
      onClose,
      PopoverProps,
      isAccepted,
      keyboard,
      onlyCalendar,
      classes,
      handleAccept,
      wider,
      ...other
    } = this.props;

    const isOpen = Boolean(this.state.anchorEl);

    return (
      <React.Fragment>
        {isOpen && <EventListener target="window" onKeyDown={this.handleKeyDown} />}

        <DateTextField
          clearable={clearable}
          value={value}
          format={format}
          onClick={this.open}
          keyboard={keyboard}
          {...other}
        />

        <Popover
          id="picker-popover"
          open={isOpen}
          anchorEl={this.state.anchorEl}
          onClose={this.close}
          classes={{
            paper: clsx(classes.popoverPaper, { [classes.popoverPaperWider]: wider }),
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: keyboard ? 'right' : 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: keyboard ? 'right' : 'center',
          }}
          {...PopoverProps}
        >
          {children}

          <div>
            {clearable && (
              <Button color="primary" onClick={this.handleClear}>
                {clearLabel}
              </Button>
            )}

            {showTodayButton && (
              <Button color="primary" onClick={onSetToday}>
                {todayLabel}
              </Button>
            )}
          </div>
        </Popover>
      </React.Fragment>
    );
  }
}

export const styles = createStyles({
  popoverPaper: {
    width: DIALOG_WIDTH,
    paddingBottom: 8,
  },
  popoverPaperWider: {
    width: DIALOG_WIDTH_WIDER,
  },
  dialogActions: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
  },
  clearableDialogAction: {
    '&:first-child': {
      marginRight: 'auto',
    },
  },
  todayDialogAction: {
    '&:first-child': {
      marginRight: 'auto',
    },
  },
});

export default withStyles(styles, { name: 'MuiPickersInline' })(InlineWrapper);
