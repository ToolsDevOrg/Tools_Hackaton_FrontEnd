import { Start } from '@/components/Start/Start';
import { useTypeNavigation } from '@/shared/hooks/useTypeNavigation';
import { ScreenWrapper } from '@/shared/ui';

export const StartScreen: React.FC = () => {

  return (
    <ScreenWrapper center>
      <Start />
    </ScreenWrapper>
  );
};
