import React from 'react';

import styled from 'styled-components';

export const Styles = styled.div`
 padding: 1rem;

  table {
    width: 100%;
    border-spacing: 0;
   

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    tbody tr:hover {
       background: #0251d1;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-right: 1px solid white;

      :last-child {
        border-right: 0;
      }
    }
  }
  }

  button {
    min-height: 2rem;
    width: 100px;
    border-radius: 4px;
  }
`;

export const StyledSaveButton = styled.button`
  margin-right: 10px;
`;
