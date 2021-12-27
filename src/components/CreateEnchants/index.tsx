import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement, useState } from 'react';

import { Fab } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { IAppState } from 'store/types';
import { v4 as uuidv4 } from 'uuid';
import { validateImage } from 'image-validator';

interface IImageData {
  id: string;
  previewImage: unknown;
  file: File;
  favorite: boolean;
  caption: string;
}

const mapStateToProps = ({ user: { id } }: IAppState) => ({ id });

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

function CreateEnchants({ id }: Props): ReactElement {
  const [imageData, setImageData] = useState<Array<IImageData>>([]);
  // holding file state to stay consistent.
  const [fileState, setFileState] = useState([]);

  const [enchant, setEnchant] = useState({
    userId: id,
    tags: [],
    itemName: 'Poison',
    condition: 'poor',
    origin: 'USA',
    title: 'The oldest bottle.',
    whereFound: 'Yard sale',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined =
    async ({ target }) => {
      // putting files into an array to gain array methods.
      if (!target.files) return;

      const fs = Array.from(target.files);

      // first check if the values being inputted by the user are valid
      const valids = await Promise.all(
        fs.map(async (file) => validateImage(file))
      );

      // if it includes an invalid lets just dump it and ask them to retry
      // ? might change later
      if (valids.includes(false)) {
        // snackbar error
        return;
      } else {
        const readFiles: Promise<IImageData>[] = fs.map(async (file) => {
          // the id will help to identify the items on the other side.
          // these are only for uploading purposes and deletion filtering
          const id = uuidv4();

          // read the image to display the information on the page
          const reader = new FileReader();
          reader.readAsDataURL(file);

          // this takes time so we will promise it rather than waiting for callbacks.
          const previewImage = await new Promise(
            (resolve) => (reader.onload = () => resolve(reader.result))
          );

          // return a flat directory we will later use to build the json.
          return {
            id,
            previewImage,
            file,
            favorite: false,
            caption: '',
          };
        });

        const builtImageData = await Promise.all(readFiles);
        setImageData((prev) => [...prev, ...builtImageData]);
      }
    };

  // we can use simple filtering to remove images.
  const handleRemoveImage = (id: string, index: number) => {
    const fs = [...fileState];
    fs.splice(index, 1);

    setFileState(fs);
    setImageData((prev) => prev.filter(({ id: prevId }) => prevId != id));
  };

  return (
    <label htmlFor="upload-photo">
      <input
        style={{ display: 'none' }}
        id="upload-photo"
        name="upload-photo"
        accept="image/*"
        type="file"
        onChange={handleChange}
        multiple
      />
      <Fab
        sx={{
          outline: 'none',
          boxShadow: 'none',
        }}
        size="small"
        component="span"
        aria-label="add"
      >
        <FileCopyIcon
          sx={{
            width: '60%',
            height: '60%',
          }}
        />
      </Fab>
    </label>
  );
}

export default connector(CreateEnchants);
