import { IEnchantInfo } from 'components/CreateEnchants/EnchantInfoForm';
import { IImageData } from 'components/CreateEnchants/EnchantImageData';
import { ThunkCreators } from 'store/types';
import axios from 'axios';

interface IUploadImage {
  imageData: IImageData[];
  enchantInfo: IEnchantInfo;
}

type InfoBuilder = {
  [key: string]: { favorite: boolean; caption: string };
};
export const uploadImage =
  ({ imageData, enchantInfo }: IUploadImage): ThunkCreators =>
  async (dispatch) => {
    try {
      const infoBuilder: InfoBuilder = {};
      const formData = new FormData();

      // convert the json to strings and send it over via form-data
      // this way we can send over multiple files.
      for (const { id, caption, file, favorite } of imageData) {
        formData.append(id, file);
        infoBuilder[id] = { caption, favorite };
      }

      // stringify data.
      formData.append('imageInfo', JSON.stringify({ imageInfo: infoBuilder }));
      formData.append('enchant', JSON.stringify(enchantInfo));

      // send
      axios
        .post('http://localhost:3001/enchants', formData)
        .then(console.log)
        .catch(console.log);
    } catch (err) {
      //TODO: handle error, snackbar?
      console.error(err);
    }
  };
