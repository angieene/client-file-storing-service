import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumbs as Breadcrumb } from '@mui/material';

import { appState } from '../../context/secondClass';
import { Routes } from '../../utils/constants';

const Breadcrumbs: FC = () => {
  return (
    <div>
      <Breadcrumb color="inherit">
        <Link to={Routes.Dashboard}>
          <span>My disk</span>
        </Link>
        {appState.parentFolders &&
          appState.parentFolders.map((folder) => (
            <Link to={`folder/${folder.id}`}>
              <span>{folder.name}</span>
            </Link>
          ))}
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
