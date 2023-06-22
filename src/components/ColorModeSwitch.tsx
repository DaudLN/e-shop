import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      aria-label='Color mode'
      onClick={toggleColorMode}
      size={'sm'}
      title={colorMode === 'light' ? 'Dark mode' : 'Light mode'}
      icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    />
  );
};

export default ColorModeSwitch;
