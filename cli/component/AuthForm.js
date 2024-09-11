import Link from "next/link";
export function AuthForm({ children }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {children}
        <div className="mb-11">
          <span className="underline bg-gray-800 text-red-900">
            Already have an account
          </span>
        </div>
      </div>
    </div>
  );
}
