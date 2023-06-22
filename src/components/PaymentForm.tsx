import { HStack, Input, InputGroup } from '@chakra-ui/react';

export default function PaymentForm() {
  return (
    <form>
      <InputGroup mb={3}>
        <Input type='text' variant='filled' bg='blue.300' placeholder='Name' />
      </InputGroup>

      <Input
        type='text'
        mb={3}
        variant='filled'
        bg='blue.300'
        placeholder='Name'
      />
      <HStack mb={3}>
        <Input type='text' variant='filled' bg='blue.300' placeholder='Name' />
        <Input type='text' variant='filled' bg='blue.300' placeholder='Name' />
      </HStack>
    </form>
  );
}
