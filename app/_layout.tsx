import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          //header 표시 안하기
          headerShown: false,
        }}
      />
    </Stack>
  );
}
