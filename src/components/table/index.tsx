import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTable } from 'react-table';

import { ModeEdit } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { IData } from '../../utils/types';
import { Styles } from './styles';

interface TableProps {
  columns: any;
  data: IData[];
}

const Table: FC<TableProps> = ({ columns, data }) => {
  const navigate = useNavigate();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const handleOpenFolder = (originalData: IData) => {
    // appState.parentFolders = [originalData.parentFolders];
    navigate(`/folder/${originalData.id}`);
  };

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => handleOpenFolder(row.original)}
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
                <td>
                  <IconButton>
                    <ModeEdit sx={{ color: 'white' }} />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

export default Table;
