import { ConnectedProps, connect } from 'react-redux';
import React, { ReactElement, useState } from 'react';

import { IAppState } from 'store/types';

const mapStateToProps = ({ user: { id } }: IAppState) => ({ id });

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;
export interface IEnchantInfo {
  userId: string | null;
  tags: string[];
  itemName: string;
  condition: string;
  origin: string;
  title: string;
  whereFound: string;
}

function EnchantInfoForm({ id }: Props): ReactElement {
  const [enchant, setEnchant] = useState<IEnchantInfo>({
    userId: id,
    tags: [],
    itemName: '',
    condition: '',
    origin: '',
    title: '',
    whereFound: '',
  });

  return <div></div>;
}

export default connector(EnchantInfoForm);
