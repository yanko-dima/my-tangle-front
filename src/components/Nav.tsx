'use client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { INavLink } from '@/models/ILink';

type Props = {
  navLinks: INavLink[];
};

export const Nav = ({ navLinks }: Props) => {
  const pathName = usePathname();
  const session = useSession();

  return (
    <nav>
      {navLinks.map(link => {
        const { label, href } = link;
        const isSctive = pathName === href;

        console.log('session: ', session);

        return (
          <Link key={label} href={href} className={isSctive ? 'active' : ''}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};
