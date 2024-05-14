import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
  return (
    <main className="flex flex-col h-screen w-full items-center justify-center">
        <SignUp />
    </main>
  )
}

export default SignUpPage