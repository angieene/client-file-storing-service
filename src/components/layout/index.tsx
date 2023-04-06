import React, {
  FC,
  PropsWithChildren,
  useState,
  MouseEvent,
  useCallback,
} from 'react';
import { Checkbox, DialogContentText, FormControlLabel } from '@mui/material';

import { StyledWrapper, StyledMain } from './style';
import Modal from '../modal';
import Dropzone from '../dropzone';
import Header from '../header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const handleClick = (e: MouseEvent<HTMLElement>, operation: string) => {
    e.preventDefault();
    if (operation == 'files') {
      setIsModalOpen(true);
    }
    // } else if (operation == 'tag') {
    // }
    setOpen(!open);
  };

  const handleModalSave = () => {
    setIsModalOpen(false);
  };
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleDropFiles = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <>
      <StyledWrapper>
        <Header
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleClick={handleClick}
        />
        <StyledMain>{children}</StyledMain>
      </StyledWrapper>
      <Modal
        isOpen={isModalOpen}
        modalTitle="Drag and drop files"
        children={
          <>
            <FormControlLabel
              value="IsPublic"
              control={<Checkbox />}
              label="Is public"
              labelPlacement="end"
            />
            <Dropzone onDrop={handleDropFiles} />
            <DialogContentText></DialogContentText>
          </>
        }
        handleSave={handleModalSave}
        handleCancel={handleModalCancel}
      />
    </>
  );
};

export default Layout;
