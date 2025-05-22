
export const getTabIcon = (routeName: string, isActive: boolean) => {
  const fill = isActive ? '#48D05D' : '#4E5567';

  switch (routeName) {
    case 'Transactions':
      // return <TransactionsIcon fill={fill} />;  // возвращаем конкретную иконку 
    case 'Profile':
      // return <ProfileIcon fill={fill} />;  // возвращаем конкретную иконку
    case 'History':
      // return <HistoryIcon fill={fill} />;  // возвращаем конкретную иконку
    default:
      return null;
  }
};
