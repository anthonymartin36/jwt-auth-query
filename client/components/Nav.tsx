import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'
import {useAuth0 } from '@auth0/auth0-react'

function Nav() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const log = useAuth0()
  const authUser = useAuth0().user
  // TODO: replace placeholder user object with the one from auth0
  const user = {
    authUser,
    nickname: authUser?.nickname,
    picture: authUser?.picture,
    email: authUser?.email
  }

  const handleSignOut = () => {
    authUser?.logout()
    console.log("Sighing out...")
  }

  const handleSignIn = () => {
    authUser?.loginWithRedirect("http://localhost:5173")
    console.log("Sighing in...", authUser?.nickname)
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.nickname}</p>}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
      <h1>Fruit FTW!</h1>
    </>
  )
}

export default Nav
