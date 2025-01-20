'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import ProfileClient from '@/components/UserProfile';
import { Spinner } from '@/components/Spinner';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Spinner caption="Loading..." />;
  if (error) return <div>{error.message}</div>;
  return (
    <div className="h-screen w-screen gap-4 flex items-center justify-center mx-auto font-[family-name:var(--font-geist-sans)]">
      {!user && (
        <a
          className="bg-sky-800 text-white rounded-lg px-12 py-4"
          href="/api/auth/login"
        >
          Login
        </a>
      )}
      {user && user?.name && user?.email && user?.picture ? (
        <ProfileClient
          user={{
            name: user.name,
            email: user.email,
            picture: user.picture,
          }}
        />
      ) : (
        <Spinner caption="Loading user profile..." />
      )}

      {user && (
        <a
          className="bg-red-800 text-white rounded-lg px-12 py-4"
          href="/api/auth/logout"
        >
          Logout
        </a>
      )}
    </div>
  );
}
