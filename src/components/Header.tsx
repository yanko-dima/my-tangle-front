import { NAV_REFS } from '@/constants/refs';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <header>
      <Nav navLinks={NAV_REFS} />
    </header>
  );
};
