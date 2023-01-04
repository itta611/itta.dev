import { ListItem } from '@chakra-ui/react';
import { FC } from 'react';

interface ListItemWrapProps {
  children: React.ReactNode;
}

const ListItemWrap: FC<ListItemWrapProps> = ({ children }) => {
  return <ListItem pl={2}>{children}</ListItem>;
};

export default ListItemWrap;
