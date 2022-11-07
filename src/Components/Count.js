import {Component} from 'react';
import {ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Flex,
    Button,
    Container,
    Center,
    Avatar,
    Badge,
  } from '@chakra-ui/react';
// import { supportsMaxLength } from '@testing-library/user-event/dist/types/utils';
import { render } from '@testing-library/react';

class  Count  extends  Component {
    constructor(props) {
        super(props);
        this.state = {
          count : 0
        }
    } 
  handleIncreaseCount = (e) => {
    e.preventDefault();
    this.setState({count: this.state.count +  1})
  }

  handleDecreaseCount = (e) =>  {
     e.preventDefault();
      this.setState({count: this.state.count  -  1})
    }

        render(){
   
    return (
        <div>
           <Container mt={20} rounded='xl'>
            <Center bg='gray.100' h='200px'>
            <Box borderWidth={1} w={300} rounded='xl' bg='white' h='150'>
                <Avatar size='md' textColor='coral' bg='gray.200' p={1} ml={2} mt={2}>CBA</Avatar>
                <Text textAlign='center' textColor='CORAL' fontSize='0.9em' fontWeight='bold'>Counter:{this.state.count }</Text>
                <Flex p={3} justifyContent='space-evenly'>
                  <Button colorScheme='purple' variant='outline' size='md' onClick={this.handleIncreaseCount}>Increase</Button>
                  <Button colorScheme='facebook' variant='outline' size='md'  onClick={this.handleDecreaseCount}>Decrease</Button>
                </Flex>
            </Box>
            </Center>
           </Container>
        </div>
    );
 }
}
export default  Count;


