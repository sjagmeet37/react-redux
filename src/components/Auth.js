import { authSliceActions } from '../store/auth-slice';
import classes from './Auth.module.css';
import { useSelector, useDispatch } from "react-redux";


const Auth = () => {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginActionHandler = (event) => {
    event.preventDefault();
    dispatch(authSliceActions.login());
  }

  return (
    <main className={classes.auth}>
      {!isAuthenticated && <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginActionHandler}>Login</button>
        </form>
      </section>}
      {isAuthenticated && <p>Logged in successfully</p>}
    </main>
  );
};

export default Auth;
