import React from 'react';
import styled from 'styled-components';

export const Styles = styled.div`
  padding: 1rem;

  table {
    min-width: 1000px;
    border-spacing: 0;
    color: white;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      text-align: start;
      margin: 0;
      padding: 1rem;

      :last-child {
        border-right: 0;
        text-align: center;
      }

      :not(:last-child) {
        width: 220px;
      }

      :first-child {
        width: 50px;
      }

      input {
        margin: -5px;
        width: 100%;
        padding: 5px;
        font-size: inherit;
        font-family: inherit;
      }
    }

    th {
      .add-new-user-btn {
        font-size: 2rem;
        background: none;
        text-align: center;
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
