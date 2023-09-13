'use client';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { INavLink } from '@/models/ILink';

type Props = {
  navLinks: INavLink[];
};

export const Nav = ({ navLinks }: Props) => {
  const pathName = usePathname();
  const session = useSession();

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Common Navigation */}
      {navLinks.map(link => {
        const { label, href } = link;
        const isSctive = pathName === href;

        console.log('session: ', session);

        return (
          <>
            <Link
              key={href}
              href={href}
              className={isSctive ? 'active' : ''}
              style={{ marginRight: 12, fontWeight: 700 }}
            >
              {label}
            </Link>
          </>
        );
      })}

      {/* User Navigation */}
      {session?.data && (
        <Link href={'/profile'} style={{ marginRight: 12, fontWeight: 700 }}>
          Profile
        </Link>
      )}
      {session?.data ? (
        <Link
          href={'#'}
          onClick={() => signOut({ callbackUrl: '/' })}
          style={{ marginRight: 12, fontWeight: 700 }}
        >
          SingOut
        </Link>
      ) : (
        <Link href={'/signin'} style={{ marginRight: 12, fontWeight: 700 }}>
          SingIn
        </Link>
      )}
    </nav>
  );
};
