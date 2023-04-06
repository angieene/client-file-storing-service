import React, { FC } from 'react';
import { useDropzone } from 'react-dropzone';

import { StyledDrop } from './style';

interface DropzoneProps {
  onDrop: (acceptedFiles: File[]) => void;
}

const Dropzone: FC<DropzoneProps> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    // accept,
  });

  return (
    <StyledDrop {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </StyledDrop>
  );
};

export default Dropzone;
