import { authConfig } from '@/configs/auth';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <>
      <h1>Profile</h1>
      <p>Information about user:</p>
      <ul>
        <li>User name: {session?.user?.name}</li>
        <li>User email: {session?.user?.email}</li>
        <li>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              alt="User avatar"
              width="100"
              height="100"
            />
          )}
        </li>
      </ul>
    </>
  );
}
