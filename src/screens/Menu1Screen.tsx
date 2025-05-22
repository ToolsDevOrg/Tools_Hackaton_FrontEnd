import { ScreenWrapper } from '@/shared/ui';
import { Popup } from '@/widgets/popup/Popup';
import { Text } from 'react-native';

export const Menu1Screen: React.FC = () => {
  return (
    <ScreenWrapper>
      <Text>Menu1</Text>
      <Popup/>
    </ScreenWrapper>
  );
};
