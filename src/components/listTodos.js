import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState, useMemo } from 'react';
import { fetchTodos } from '../store/actions/todos';


const ListTodos = () => {
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch()
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rowTodos = useMemo(() => {
    return todos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [todos, page, rowsPerPage])

  const getTodos = useCallback(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  useEffect(() => {
    getTodos()
  }, [getTodos])

  return (
    <Box ml="auto" mr="auto" mt={10} sx={{width: 900}}>
      <Paper>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">completed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowTodos.map((todo) => (
                <TableRow
                  key={todo.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {todo.title}
                  </TableCell>
                  <TableCell align="right"><Checkbox disabled checked={todo.completed} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={todos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default ListTodos;