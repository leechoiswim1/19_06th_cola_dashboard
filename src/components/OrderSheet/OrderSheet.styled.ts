import { styled, TableCell, TableContainer } from '@mui/material';

export const MUIContainer = styled(TableContainer)`
  height: calc(100vh - 154px);
  overflow: auto;
  white-space: nowrap;
  hr {
    width: 2px;
    display: inline-block;
    margin: 0 0.5rem;
    min-height: 24px;
  }

  tr {
    th,
    td {
      &:nth-of-type(2) hr {
        margin-left: 0;
      }
    }
  }
`;

export const MUITableCell = styled(TableCell)``;
