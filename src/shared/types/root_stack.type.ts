export type RootStackParamList = {
  main: undefined; 
  menu1: { screen: keyof Menu1StackParamList };
  menu2: { screen: keyof Menu2StackParamList };
  menu3: { screen: keyof Menu3StackParamList };
};

type Menu1StackParamList = {
  menu1_main: undefined;
  test1: undefined;
};

type Menu2StackParamList = {
  menu2_main: undefined;
  test2: undefined;
};

type Menu3StackParamList = {
  menu3_main: undefined;
  test3: undefined;
};