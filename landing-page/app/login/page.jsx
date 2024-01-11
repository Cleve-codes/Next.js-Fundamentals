const { signIn, auth } = require("../../lib/auth")
import { handleGithubLogin } from "../../lib/action";

const LoginPage = async () => {

  const session = await auth();
  console.log(session)

  return (
    <div>
      <form action={handleGithubLogin}>

      <button>Login with Github</button>
      </form>
    </div>
  )
}

export default LoginPage;