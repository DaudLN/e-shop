import { FaSearch } from 'react-icons/fa';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

const SearchInput = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputGroup>
        <InputRightElement children={<FaSearch />} />
        <Input
          placeholder='Search product...'
          borderRadius={10}
          variant='outline'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
