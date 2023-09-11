'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export const Nav = ({ navLinks }: Props) => {
  const pathName = usePathname();

  return (
    <nav>
      {navLinks.map(link => {
        const { label, href } = link;

        return (
          <Link key={label} href={href}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};
