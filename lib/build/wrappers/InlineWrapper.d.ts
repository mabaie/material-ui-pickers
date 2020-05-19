import { Omit } from '@material-ui/core';
import { PopoverProps as PopoverPropsType } from '@material-ui/core/Popover';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DateTextFieldProps } from '../_shared/DateTextField';
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
  showTodayButton?: boolean;
  todayLabel?: React.ReactNode;
}
export declare class InlineWrapper extends React.PureComponent<
  InlineWrapperProps & WithStyles<typeof styles>
> {
  static propTypes: any;
  static defaultProps: {
    value: Date;
    onlyCalendar: boolean;
    isAccepted: boolean;
    clearable: boolean;
    clearLabel: string;
    showTodayButton: boolean;
    todayLabel: string;
  };
  static getDerivedStateFromProps(
    nextProps: InlineWrapperProps
  ): {
    anchorEl: null;
  } | null;
  state: {
    anchorEl: null;
  };
  open: (e: React.SyntheticEvent<Element, Event>) => void;
  close: () => void;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleClear: () => void;
  render(): JSX.Element;
}
export declare const styles: Record<
  | 'popoverPaper'
  | 'popoverPaperWider'
  | 'dialogActions'
  | 'clearableDialogAction'
  | 'todayDialogAction',
  import('@material-ui/core/styles/withStyles').CSSProperties
>;
declare const _default: React.ComponentType<
  Pick<
    {
      handleAccept: () => void;
      isAccepted: boolean;
      onlyCalendar: boolean;
      clearable?: boolean | undefined;
      clearLabel?: React.ReactNode;
      showTodayButton?: boolean | undefined;
      todayLabel?: React.ReactNode;
      wider?: boolean | undefined;
      onOpen?: (() => void) | undefined;
      onClose?: (() => void) | undefined;
      PopoverProps?: Partial<PopoverPropsType> | undefined;
      onClear?: (() => void) | undefined;
      onSetToday?: (() => void) | undefined;
      label?: React.ReactNode;
      select?: boolean | undefined;
      style?: React.CSSProperties | undefined;
      title?: string | undefined;
      mask?: (string | RegExp)[] | ((value: string) => (string | RegExp)[]) | undefined;
      children?: React.ReactNode;
      value: import('../constants/prop-types').DateType;
      onChange: (date: any) => void;
      format: string;
      labelFunc?: ((date: any, invalidLabel: string) => string) | undefined;
      disableOpenOnEnter?: boolean | undefined;
      onError?: ((newValue: any, error: React.ReactNode) => void) | undefined;
      fullWidth?: boolean | undefined;
      defaultValue?: string | number | undefined;
      manifest?: string | undefined;
      defaultChecked?: boolean | undefined;
      suppressContentEditableWarning?: boolean | undefined;
      suppressHydrationWarning?: boolean | undefined;
      accessKey?: string | undefined;
      className?: string | undefined;
      contentEditable?: boolean | undefined;
      contextMenu?: string | undefined;
      dir?: string | undefined;
      draggable?: boolean | undefined;
      hidden?: boolean | undefined;
      id?: string | undefined;
      lang?: string | undefined;
      placeholder?: string | undefined;
      slot?: string | undefined;
      spellCheck?: boolean | undefined;
      tabIndex?: number | undefined;
      inputMode?: string | undefined;
      is?: string | undefined;
      radioGroup?: string | undefined;
      role?: string | undefined;
      about?: string | undefined;
      datatype?: string | undefined;
      inlist?: any;
      prefix?: string | undefined;
      property?: string | undefined;
      resource?: string | undefined;
      typeof?: string | undefined;
      vocab?: string | undefined;
      autoCapitalize?: string | undefined;
      autoCorrect?: string | undefined;
      autoSave?: string | undefined;
      color?: string | undefined;
      itemProp?: string | undefined;
      itemScope?: boolean | undefined;
      itemType?: string | undefined;
      itemID?: string | undefined;
      itemRef?: string | undefined;
      results?: number | undefined;
      security?: string | undefined;
      unselectable?: 'on' | 'off' | undefined;
      'aria-activedescendant'?: string | undefined;
      'aria-atomic'?: boolean | 'false' | 'true' | undefined;
      'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both' | undefined;
      'aria-busy'?: boolean | 'false' | 'true' | undefined;
      'aria-checked'?: boolean | 'false' | 'true' | 'mixed' | undefined;
      'aria-colcount'?: number | undefined;
      'aria-colindex'?: number | undefined;
      'aria-colspan'?: number | undefined;
      'aria-controls'?: string | undefined;
      'aria-current'?:
        | boolean
        | 'time'
        | 'date'
        | 'false'
        | 'true'
        | 'page'
        | 'step'
        | 'location'
        | undefined;
      'aria-describedby'?: string | undefined;
      'aria-details'?: string | undefined;
      'aria-disabled'?: boolean | 'false' | 'true' | undefined;
      'aria-dropeffect'?: 'link' | 'none' | 'copy' | 'execute' | 'move' | 'popup' | undefined;
      'aria-errormessage'?: string | undefined;
      'aria-expanded'?: boolean | 'false' | 'true' | undefined;
      'aria-flowto'?: string | undefined;
      'aria-grabbed'?: boolean | 'false' | 'true' | undefined;
      'aria-haspopup'?:
        | boolean
        | 'dialog'
        | 'menu'
        | 'false'
        | 'true'
        | 'listbox'
        | 'tree'
        | 'grid'
        | undefined;
      'aria-hidden'?: boolean | 'false' | 'true' | undefined;
      'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling' | undefined;
      'aria-keyshortcuts'?: string | undefined;
      'aria-label'?: string | undefined;
      'aria-labelledby'?: string | undefined;
      'aria-level'?: number | undefined;
      'aria-live'?: 'off' | 'assertive' | 'polite' | undefined;
      'aria-modal'?: boolean | 'false' | 'true' | undefined;
      'aria-multiline'?: boolean | 'false' | 'true' | undefined;
      'aria-multiselectable'?: boolean | 'false' | 'true' | undefined;
      'aria-orientation'?: 'horizontal' | 'vertical' | undefined;
      'aria-owns'?: string | undefined;
      'aria-placeholder'?: string | undefined;
      'aria-posinset'?: number | undefined;
      'aria-pressed'?: boolean | 'false' | 'true' | 'mixed' | undefined;
      'aria-readonly'?: boolean | 'false' | 'true' | undefined;
      'aria-relevant'?: 'text' | 'additions' | 'additions text' | 'all' | 'removals' | undefined;
      'aria-required'?: boolean | 'false' | 'true' | undefined;
      'aria-roledescription'?: string | undefined;
      'aria-rowcount'?: number | undefined;
      'aria-rowindex'?: number | undefined;
      'aria-rowspan'?: number | undefined;
      'aria-selected'?: boolean | 'false' | 'true' | undefined;
      'aria-setsize'?: number | undefined;
      'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' | undefined;
      'aria-valuemax'?: number | undefined;
      'aria-valuemin'?: number | undefined;
      'aria-valuenow'?: number | undefined;
      'aria-valuetext'?: string | undefined;
      dangerouslySetInnerHTML?:
        | {
            __html: string;
          }
        | undefined;
      onCopy?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
      onCopyCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
      onCut?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
      onCutCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
      onPaste?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
      onPasteCapture?: ((event: React.ClipboardEvent<HTMLDivElement>) => void) | undefined;
      onCompositionEnd?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
      onCompositionEndCapture?:
        | ((event: React.CompositionEvent<HTMLDivElement>) => void)
        | undefined;
      onCompositionStart?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
      onCompositionStartCapture?:
        | ((event: React.CompositionEvent<HTMLDivElement>) => void)
        | undefined;
      onCompositionUpdate?: ((event: React.CompositionEvent<HTMLDivElement>) => void) | undefined;
      onCompositionUpdateCapture?:
        | ((event: React.CompositionEvent<HTMLDivElement>) => void)
        | undefined;
      onFocus?: ((event: any) => void) | undefined;
      onFocusCapture?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
      onBlur?: ((event: any) => void) | undefined;
      onBlurCapture?: ((event: React.FocusEvent<HTMLDivElement>) => void) | undefined;
      onChangeCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onBeforeInput?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onBeforeInputCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onInput?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onInputCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onReset?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onResetCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onSubmit?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onSubmitCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onInvalid?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onInvalidCapture?: ((event: React.FormEvent<HTMLDivElement>) => void) | undefined;
      onLoad?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onLoadCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onErrorCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onKeyDown?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
      onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
      onKeyPress?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
      onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
      onKeyUp?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
      onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLDivElement>) => void) | undefined;
      onAbort?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onAbortCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onCanPlay?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onCanPlayThroughCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onDurationChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onDurationChangeCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onEmptied?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onEncrypted?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onEncryptedCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onEnded?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onEndedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onLoadedData?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onLoadedDataCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onLoadedMetadataCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onLoadStart?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onLoadStartCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onPause?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onPauseCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onPlay?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onPlayCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onPlaying?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onPlayingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onProgress?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onProgressCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onRateChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onRateChangeCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onSeeked?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onSeekedCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onSeeking?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onSeekingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onStalled?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onStalledCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onSuspend?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onSuspendCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onTimeUpdate?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onTimeUpdateCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onVolumeChange?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onVolumeChangeCapture?:
        | ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void)
        | undefined;
      onWaiting?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onWaitingCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onClickCapture?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onContextMenu?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onContextMenuCapture?:
        | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
        | undefined;
      onDoubleClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onDoubleClickCapture?:
        | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
        | undefined;
      onDrag?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragEnd?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragEndCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragEnter?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragEnterCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragExit?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragExitCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragLeave?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragLeaveCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragOver?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragOverCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragStart?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDragStartCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDrop?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onDropCapture?: ((event: React.DragEvent<HTMLDivElement>) => void) | undefined;
      onMouseDown?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onMouseDownCapture?:
        | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
        | undefined;
      onMouseEnter?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onMouseLeave?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onMouseMove?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onMouseMoveCapture?:
        | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
        | undefined;
      onMouseOut?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onMouseOutCapture?:
        | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
        | undefined;
      onMouseOver?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onMouseOverCapture?:
        | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
        | undefined;
      onMouseUp?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
      onMouseUpCapture?:
        | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
        | undefined;
      onSelect?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onSelectCapture?: ((event: React.SyntheticEvent<HTMLDivElement, Event>) => void) | undefined;
      onTouchCancel?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
      onTouchCancelCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
      onTouchEnd?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
      onTouchEndCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
      onTouchMove?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
      onTouchMoveCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
      onTouchStart?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
      onTouchStartCapture?: ((event: React.TouchEvent<HTMLDivElement>) => void) | undefined;
      onPointerDown?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerDownCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerMove?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerMoveCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerUp?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerUpCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerCancel?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerCancelCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerEnter?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerEnterCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerLeave?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerOver?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerOverCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerOut?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onPointerOutCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onGotPointerCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onGotPointerCaptureCapture?:
        | ((event: React.PointerEvent<HTMLDivElement>) => void)
        | undefined;
      onLostPointerCapture?: ((event: React.PointerEvent<HTMLDivElement>) => void) | undefined;
      onLostPointerCaptureCapture?:
        | ((event: React.PointerEvent<HTMLDivElement>) => void)
        | undefined;
      onScroll?: ((event: React.UIEvent<HTMLDivElement>) => void) | undefined;
      onScrollCapture?: ((event: React.UIEvent<HTMLDivElement>) => void) | undefined;
      onWheel?: ((event: React.WheelEvent<HTMLDivElement>) => void) | undefined;
      onWheelCapture?: ((event: React.WheelEvent<HTMLDivElement>) => void) | undefined;
      onAnimationStart?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
      onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
      onAnimationEnd?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
      onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
      onAnimationIteration?: ((event: React.AnimationEvent<HTMLDivElement>) => void) | undefined;
      onAnimationIterationCapture?:
        | ((event: React.AnimationEvent<HTMLDivElement>) => void)
        | undefined;
      onTransitionEnd?: ((event: React.TransitionEvent<HTMLDivElement>) => void) | undefined;
      onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLDivElement>) => void) | undefined;
      component?:
        | 'object'
        | 'abbr'
        | 'address'
        | 'article'
        | 'aside'
        | 'b'
        | 'bdi'
        | 'bdo'
        | 'big'
        | 'blockquote'
        | 'caption'
        | 'cite'
        | 'code'
        | 'col'
        | 'colgroup'
        | 'data'
        | 'dd'
        | 'del'
        | 'details'
        | 'dfn'
        | 'div'
        | 'dt'
        | 'em'
        | 'embed'
        | 'figcaption'
        | 'figure'
        | 'footer'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'head'
        | 'header'
        | 'hgroup'
        | 'hr'
        | 'i'
        | 'iframe'
        | 'img'
        | 'input'
        | 'kbd'
        | 'keygen'
        | 'legend'
        | 'main'
        | 'mark'
        | 'menu'
        | 'menuitem'
        | 'meter'
        | 'nav'
        | 'noindex'
        | 'noscript'
        | 'output'
        | 'p'
        | 'picture'
        | 'rp'
        | 'rt'
        | 'ruby'
        | 's'
        | 'samp'
        | 'section'
        | 'small'
        | 'span'
        | 'strong'
        | 'sub'
        | 'summary'
        | 'sup'
        | 'table'
        | 'tbody'
        | 'td'
        | 'tfoot'
        | 'th'
        | 'thead'
        | 'time'
        | 'tr'
        | 'u'
        | 'var'
        | 'wbr'
        | 'webview'
        | React.ComponentClass<import('@material-ui/core/FormControl').FormControlProps, any>
        | React.FunctionComponent<import('@material-ui/core/FormControl').FormControlProps>
        | undefined;
      disabled?: boolean | undefined;
      error?: boolean | undefined;
      margin?: 'none' | 'dense' | 'normal' | undefined;
      required?: boolean | undefined;
      variant?: 'standard' | 'outlined' | 'filled' | undefined;
      innerRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
      autoComplete?: string | undefined;
      autoFocus?: boolean | undefined;
      FormHelperTextProps?:
        | Partial<import('@material-ui/core/FormHelperText').FormHelperTextProps>
        | undefined;
      helperText?: React.ReactNode;
      InputLabelProps?: Partial<import('@material-ui/core/InputLabel').InputLabelProps> | undefined;
      inputRef?: ((instance: any) => void) | React.RefObject<any> | null | undefined;
      multiline?: boolean | undefined;
      name?: string | undefined;
      rows?: string | number | undefined;
      rowsMax?: string | number | undefined;
      SelectProps?: Partial<import('@material-ui/core/Select').SelectProps> | undefined;
      type?: string | undefined;
      invalidLabel?: string | undefined;
      emptyLabel?: string | undefined;
      maxDate?: import('../constants/prop-types').DateType;
      minDate?: import('../constants/prop-types').DateType;
      disablePast?: boolean | undefined;
      disableFuture?: boolean | undefined;
      maxDateMessage?: React.ReactNode;
      minDateMessage?: React.ReactNode;
      invalidDateMessage?: React.ReactNode;
      keepCharPositions?: boolean | undefined;
      pipe?: any;
      InputProps?:
        | Partial<import('@material-ui/core/Input').InputProps>
        | Partial<import('@material-ui/core/FilledInput').FilledInputProps>
        | Partial<import('@material-ui/core/OutlinedInput').OutlinedInputProps>
        | undefined;
      inputProps?: import('@material-ui/core/InputBase').InputBaseComponentProps | undefined;
      keyboard?: boolean | undefined;
      keyboardIcon?: React.ReactNode;
      TextFieldComponent?:
        | 'symbol'
        | 'object'
        | 'a'
        | 'abbr'
        | 'address'
        | 'area'
        | 'article'
        | 'aside'
        | 'audio'
        | 'b'
        | 'base'
        | 'bdi'
        | 'bdo'
        | 'big'
        | 'blockquote'
        | 'body'
        | 'br'
        | 'button'
        | 'canvas'
        | 'caption'
        | 'cite'
        | 'code'
        | 'col'
        | 'colgroup'
        | 'data'
        | 'datalist'
        | 'dd'
        | 'del'
        | 'details'
        | 'dfn'
        | 'dialog'
        | 'div'
        | 'dl'
        | 'dt'
        | 'em'
        | 'embed'
        | 'fieldset'
        | 'figcaption'
        | 'figure'
        | 'footer'
        | 'form'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'head'
        | 'header'
        | 'hgroup'
        | 'hr'
        | 'html'
        | 'i'
        | 'iframe'
        | 'img'
        | 'input'
        | 'ins'
        | 'kbd'
        | 'keygen'
        | 'label'
        | 'legend'
        | 'li'
        | 'link'
        | 'main'
        | 'map'
        | 'mark'
        | 'menu'
        | 'menuitem'
        | 'meta'
        | 'meter'
        | 'nav'
        | 'noindex'
        | 'noscript'
        | 'ol'
        | 'optgroup'
        | 'option'
        | 'output'
        | 'p'
        | 'param'
        | 'picture'
        | 'pre'
        | 'progress'
        | 'q'
        | 'rp'
        | 'rt'
        | 'ruby'
        | 's'
        | 'samp'
        | 'script'
        | 'section'
        | 'select'
        | 'small'
        | 'source'
        | 'span'
        | 'strong'
        | 'style'
        | 'sub'
        | 'summary'
        | 'sup'
        | 'table'
        | 'tbody'
        | 'td'
        | 'textarea'
        | 'tfoot'
        | 'th'
        | 'thead'
        | 'time'
        | 'title'
        | 'tr'
        | 'track'
        | 'u'
        | 'ul'
        | 'var'
        | 'video'
        | 'wbr'
        | 'webview'
        | 'svg'
        | 'animate'
        | 'animateMotion'
        | 'animateTransform'
        | 'circle'
        | 'clipPath'
        | 'defs'
        | 'desc'
        | 'ellipse'
        | 'feBlend'
        | 'feColorMatrix'
        | 'feComponentTransfer'
        | 'feComposite'
        | 'feConvolveMatrix'
        | 'feDiffuseLighting'
        | 'feDisplacementMap'
        | 'feDistantLight'
        | 'feFlood'
        | 'feFuncA'
        | 'feFuncB'
        | 'feFuncG'
        | 'feFuncR'
        | 'feGaussianBlur'
        | 'feImage'
        | 'feMerge'
        | 'feMergeNode'
        | 'feMorphology'
        | 'feOffset'
        | 'fePointLight'
        | 'feSpecularLighting'
        | 'feSpotLight'
        | 'feTile'
        | 'feTurbulence'
        | 'filter'
        | 'foreignObject'
        | 'g'
        | 'image'
        | 'line'
        | 'linearGradient'
        | 'marker'
        | 'mask'
        | 'metadata'
        | 'mpath'
        | 'path'
        | 'pattern'
        | 'polygon'
        | 'polyline'
        | 'radialGradient'
        | 'rect'
        | 'stop'
        | 'switch'
        | 'text'
        | 'textPath'
        | 'tspan'
        | 'use'
        | 'view'
        | React.ComponentClass<import('@material-ui/core/TextField').TextFieldProps, any>
        | React.FunctionComponent<import('@material-ui/core/TextField').TextFieldProps>
        | React.ComponentClass<React.HTMLAttributes<any>, any>
        | React.FunctionComponent<React.HTMLAttributes<any>>
        | undefined;
      InputAdornmentProps?:
        | Partial<import('@material-ui/core/InputAdornment').InputAdornmentProps>
        | undefined;
      KeyboardButtonProps?:
        | Partial<import('@material-ui/core/IconButton').IconButtonProps>
        | undefined;
      adornmentPosition?: 'end' | 'start' | undefined;
      onInputChange?: ((e: React.FormEvent<HTMLInputElement>) => void) | undefined;
      classes: Record<
        | 'popoverPaper'
        | 'popoverPaperWider'
        | 'dialogActions'
        | 'clearableDialogAction'
        | 'todayDialogAction',
        string
      >;
    } & Pick<PropTypes.InferProps<any>, string | number | symbol>,
    string | number | symbol
  > &
    import('@material-ui/core').StyledComponentProps<
      | 'popoverPaper'
      | 'popoverPaperWider'
      | 'dialogActions'
      | 'clearableDialogAction'
      | 'todayDialogAction'
    >
>;
export default _default;
