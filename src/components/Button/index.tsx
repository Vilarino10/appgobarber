import React, { PropsWithChildren } from "react";
import { Touchable, TouchableProps } from "react-native-gesture-handler";

import { Container, ButtonText } from "./styles";

interface ButtonProps extends TouchableProps, PropsWithChildren {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
