import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { styled } from '@mui/material/styles'
import MuiTable, { TableProps as MuiTableProps } from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { TooltipIcon } from '../Icon'
import TableHeadCell from './TableHeadCell'
import TablerowExpansion from './TableRowExpansion'

enum Alignment {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
  JUSTIFY = 'justify',
}

interface Page {
  rows: number
  index: number
}

interface Config {
  header: string
  tooltip?: string
  alignment?: Alignment
  render?: React.ComponentType
}

interface TableProps extends MuiTableProps {
  configs: Config[]
  list?: any[]
  total?: number
  loading?: boolean
  rowExpansion?: React.ComponentType
  onPageChange?: (page: Page) => void
}

const StyledTable = styled('div')({
  '& .MuiTableCell-root': {
    fontSize: '14px',
    whiteSpace: 'nowrap',
  },
  '& .MuiCollapse-wrapper': {
    padding: '16px 0',
  },
  '& .MuiTablePagination-selectLabel': {
    fontSize: '14px',
  },
  '& .MuiTablePagination-displayedRows': {
    fontSize: '14px',
  },
})

const Table: React.FC<TableProps> = ({
  configs,
  list = [],
  total = 0,
  loading = false,
  rowExpansion: RowExpansion,
  onPageChange,
  ...props
}) => {
  const [rows, setRows] = useState(10)
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(total)

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage)
    onPageChange?.({ rows: rows, index: newPage })
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0)
    setRows(+event.target.value)
    onPageChange?.({ rows: +event.target.value, index: 0 })
  }

  useEffect(() => {
    if (total) setCount(total)
  }, [total])

  return (
    <StyledTable>
      <TableContainer>
        <MuiTable {...props}>
          <TableHead>
            <TableRow>
              {RowExpansion && <TableHeadCell />}
              {configs.map(({ header, tooltip, alignment }) => (
                <TableHeadCell key={header} align={alignment}>
                  {header} {tooltip && <TooltipIcon icon={HelpOutlineIcon} title={tooltip} />}
                </TableHeadCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {(loading ? [0, 1, 2, 3, 4] : list).map((rowData, index) => (
              <TablerowExpansion
                key={index}
                configs={configs}
                rowData={rowData}
                loading={loading}
                rowExpansion={RowExpansion}
              />
            ))}

            {!loading && list.length === 0 && (
              <TableRow>
                <TableCell colSpan={configs.length} align="center">
                  No Data.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>

      <TablePagination
        component="div"
        size="small"
        page={page}
        count={count}
        rowsPerPage={rows}
        rowsPerPageOptions={[10, 25, 100]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledTable>
  )
}

export { Alignment }
export type { Config }
export default Table
