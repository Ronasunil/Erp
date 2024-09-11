import Link from "next/link";
export function AuthForm({ children, authText }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {children}
        <div className="mt-6">
          <span>
            {authText === "signup" ? "Already have an " : "Create an "}
            <Link
              href={authText === "signup" ? "/login" : "/signup"}
              className="text-blue-500 underline"
            >
              account?
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
