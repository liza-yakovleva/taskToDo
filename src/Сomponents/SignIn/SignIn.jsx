
import React from 'react'
// import {Link} from "react-router-dom"
import './signIn.css'

const SignIn = () => {
  return (
    <>
  <body className="text-center">
      <main className="form-signin">
          <form>
            <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="eee" width="72" height="57"/>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
              <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"> </input>
                  <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
        <label for="floatingPassword">Password</label>
    </div>
    <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"></input>
                 Remember me
              </label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
    </button>
    <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
  </form>
</main>
  <div id="wt-sky-root"></div>
  </body>
    </>

  )
}
export default SignIn
  