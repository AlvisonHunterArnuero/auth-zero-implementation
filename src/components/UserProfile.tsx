import { ProfileClientProps } from "@/CustomTypes/Types";

/* eslint-disable @next/next/no-img-element */
export default function ProfileClient({ user }: ProfileClientProps) {
  return (
    user && (
      <div className="flex flex-rows items-center gap-6 rounded-lg shadow-md p-3 bg-gray-800">
        <img
          className="w-10 h-10 rounded-full hover:border-2 hover:scale-105 transition ease-in-out"
          src={user?.picture as string}
          alt={user?.name as string}
        />
        <h2 className="text-green-500">
          <span className="font-semibold text-orange-400 mr-1 uppercase">
            User:
          </span>
          {user?.name}
        </h2>
        <p className="text-sky-400">
          <span className="font-semibold text-orange-400 mr-1 uppercase">
            Email:
          </span>
          {user?.email}
        </p>
      </div>
    )
  );
}
