import { useEffect, useMemo, useState } from 'react';

import { CircularProgress, Container } from '@mui/material';

import Table from '../../components/table';
import { folderService } from '../../services/FolderService';
import { IData } from '../../utils/types';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    ],
    [],
  );

  useEffect(() => {
    setIsLoading(true);
    folderService
      .getRootFolder()
      .then((res: IData) => {
        setIsLoading(false);
        setData(res.childFolders);
      })
      .catch((err: string) => console.log(err));
  }, []);

  if (isLoading) return <CircularProgress />;

  return (
    <Container maxWidth="xl">
      <Table columns={columns} data={data} />
    </Container>
  );
};

export default Dashboard;
