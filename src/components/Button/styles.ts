import styled from "styled-components/native";
import { Touchable } from "react-native-gesture-handler";

export const Container = styled(Touchable)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "RobotoSlab-Medium";
  color: #312e38;
  font-size: 18px;
`;
