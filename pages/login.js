import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
          Login
        </h2>
        <div className="flex justify-center items-center">
          <SignIn
            path="/login"
            routing="path"
            redirectUrl="/dashboard"
            appearance={{
              variables: {
                fontSize: "1.4rem",
              },
              elements: {
                header: "hidden",
                footerAction: "hidden",
                card: "shadow-none border-0 border-gray-200",
                socialButtons: "flex flex-col",
                alert: "hidden",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
