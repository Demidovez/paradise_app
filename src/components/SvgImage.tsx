import React, {useMemo} from 'react';
import {SvgProps} from 'react-native-svg';

import SvgNotFound from '../../assets/icons/not_found.svg';
import SvgCloseShape from '../../assets/icons/close.svg';
import {useAppSelector} from '../hooks';
import {Selectors} from '../redux/selectors/selectors';
import {StyleProp, ViewStyle} from 'react-native';

interface ISvgImage {
  width: number | string;
  height: number | string;
  fill?: string;
  name: string | undefined;
  style?: StyleProp<ViewStyle>;
}

const SvgList = {
  close: SvgCloseShape,
};

function SvgImage({name, fill, ...props}: ISvgImage) {
  // console.log("SvgImage", name, fill, props);

  const theme = useAppSelector(Selectors.getTheme);

  const Image: React.FC<SvgProps> = useMemo(() => {
    let Component = SvgNotFound;

    Object.entries(SvgList).some(([nameSvg, component]) => {
      if (nameSvg === name) {
        Component = component;

        return true;
      }
    });

    return Component;
  }, [name]);

  return <Image {...props} fill={fill || theme.colors.primary} />;
}

export default React.memo(SvgImage);
