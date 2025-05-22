import { PropsWithChildren } from 'react';
import { ScrollView } from 'react-native';
import { ScreenWrapperProps } from './type';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const ScreenWrapper: React.FC<PropsWithChildren<ScreenWrapperProps>> = ({
  children,
  className,
  center = false,
}) => {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView
      className={`flex-1 ${className}`}
      contentContainerStyle={{
        flexGrow: 1,
        marginTop: 10,
        paddingHorizontal: 15,
        paddingTop: top + 10,
        paddingBottom: 20,
        justifyContent: center ? 'center' : 'flex-start',
        alignItems: center ? 'center' : 'flex-start',
      }}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};
