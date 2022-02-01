import { SxProps, Theme } from '@mui/material';

type TypeKeysAsString = {
  [Property in string]: SxProps<Theme> | undefined;
};

/**
 * @description While using an anon function, create styles that are mapped to typed sx Props.
 * @example Creates a sx Props Function that can be be invoked within the component

      const sxProps = makeSxProps(() => ({
        navbarContainer: {
            backgroundColor: "black",
          },
      }));

      function Component() {
        const sxStyles = sxProps();
      }
 */

const makeSxProps: (cb: () => TypeKeysAsString) => () => TypeKeysAsString =
  (cb) => () =>
    cb();

export default makeSxProps;
