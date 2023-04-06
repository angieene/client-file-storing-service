import { useEffect, useMemo, useState } from 'react';
import { Container } from '@mui/material';

import Table from '../../components/table';
import { folderService } from '../../services/FolderService';

export interface IData {
  name: string;
  updated_at: string;
  size: number;
}

const Dashboard = () => {
  const [data, setData] = useState<IData[]>([]);
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Updated at',
        accessor: 'updated_at',
      },
      {
        Header: 'Size',
        accessor: 'size',
      },
      {
        Header: 'Actions',
        accessor: '',
      },
    ],
    []
  );

  useEffect(() => {
    folderService
      .getAll()
      .then((res: IData[]) => {
        setData(res);
      })
      .catch((err: string) => console.log(err));
  }, []);

  return (
    <Container maxWidth="xl">
      {/* <StyledFoldersWrapper>
        <Typography variant="h5"> Folders</Typography>
      </StyledFoldersWrapper>
      <StyledFoldersWrapper>
        <Typography variant="h5"> Files</Typography>
      </StyledFoldersWrapper> */}
      <Table columns={columns} data={data} />
    </Container>
  );
};

export default Dashboard;
