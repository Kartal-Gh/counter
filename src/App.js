import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Count from './Components/Count';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Count/>
    </ChakraProvider>
  );
}

export default App;
