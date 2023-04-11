import React, {
  FC,
  PropsWithChildren,
  useState,
  MouseEvent,
  useCallback,
} from 'react';

import {
  Checkbox,
  DialogContentText,
  FormControlLabel,
  TextField,
} from '@mui/material';

import { folderService } from '../../services/FolderService';
import Dropzone from '../dropzone';
import Header from '../header';
import Modal from '../modal';
import { StyledWrapper, StyledMain } from './style';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddFolderOpen, setIsModalAddFolderOpen] = useState(false);
  const [folderBody, setFolderBody] = useState({
    name: '',
    parentFolderId: '',
  });

  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const handleClick = (e: MouseEvent<HTMLElement>, operation: string) => {
    e.preventDefault();
    switch (operation) {
      case 'files':
        setIsModalOpen(true);
        break;
      case 'folder':
        setIsModalAddFolderOpen(true);
        break;

      default:
        break;
    }
    setOpen(!open);
  };

  const handleModalSave = () => {
    setIsModalOpen(false);
  };
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleCreateFolder = () => {
    createFolder();
    setIsModalAddFolderOpen(false);
  };
  const handleCancelCreateFolder = () => {
    setIsModalAddFolderOpen(false);
  };

  const handleDropFiles = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const createFolder = useCallback(() => {
    folderService.createFolder(folderBody).catch((err) => setIsAlertOpen(true));
  }, [folderBody]);

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
      <Modal
        isOpen={isModalAddFolderOpen}
        modalTitle="Add folder"
        children={
          <>
            <TextField
              value={folderBody.name}
              onChange={(e) =>
                setFolderBody((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter folder name"
            />
          </>
        }
        handleSave={handleCreateFolder}
        handleCancel={handleCancelCreateFolder}
      />
    </>
  );
};

export default Layout;
