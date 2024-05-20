import { Text, View } from "react-native";
import { styled } from "nativewind";
import "../../output"


const StyledView = styled(View);
const StyledText = styled(Text);

export default function HomeScreen() {
  return (
    <StyledView className="flex justify-center items-center">
      <StyledText className="text-black text-3xl">hello world!</StyledText>
    </StyledView>
  );
}
