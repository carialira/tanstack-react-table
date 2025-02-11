import { Cell, Header, RowData } from '@tanstack/react-table';
import { CSSProperties } from 'react';

export type Props = {
  index: number;
  rowLength: number;
  context: Header<RowData, unknown> | Cell<RowData, unknown>;
};

export const createPinnedCellStyle = ({
  index,
  rowLength,
  context,
}: Props): CSSProperties | undefined => {
  const pinPosition = context.column.getIsPinned();
  const bordersLeft = index !== 0 ? index + 1 : 0;
  const bordersRight = index === rowLength ? 0 : rowLength - (index + 1);
  
  const leftStyle = {
    left: context.column.getStart('left') + bordersLeft,
  };
  const rightStyle = {
    right: context.column.getAfter('right') + bordersRight,
  };

  switch (pinPosition) {
    case 'left': {
      return leftStyle;
    }
    case 'right': {
      return rightStyle;
    }
    default: {
      return undefined;
    }
  }
};
