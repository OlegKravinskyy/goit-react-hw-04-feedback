import PropTypes from 'prop-types';
import { Container } from './Box.styled';

export const Box = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Box;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
