import './login.styles.css';
import { login } from '../../api';
import { useState, useContext } from 'react';
import { ToastContext } from '../../contexts/useToastContext';



export function LoginPage() {
  const [username, setUsername] = useState({ value: '', valid: true });
  const [password, setPassword] = useState({ value: '', valid: true });

  const { dispatchToastContent } = useContext(ToastContext)!;

  const attemptLogin = async (e: any) => {
    e.preventDefault();
    const resp = await login(username.value, password.value);
    if (!resp.apiCalled) {
      dispatchToastContent({ type: 'error', message: resp.message });
      return;
    }
    if (resp.message && resp.message.match(/username/i)) {
      setUsername({ ...username, valid: false });
      dispatchToastContent({ type: 'error', message: resp.message });
      return;
    } else {
      setUsername({ ...username, valid: true });
    }
    if (resp.message && resp.message.match(/password/i)) {
      setPassword({ ...password, valid: false });
      dispatchToastContent({ type: 'error', message: resp.message });
      return;
    } else {
      setPassword({ ...password, valid: true });
    }

    dispatchToastContent({ type: 'success', message: 'User logged in.' });
  }

  return (
    <div id="login-page-container">
      <form id="login-form">
        <input
          required 
          autoComplete='off'
          type="text" 
          name="username" 
          id="username-field" 
          className={`login-form-field ${username.valid ? '' : 'input-error'}`}
          placeholder="Username" 
          onBlur={(e) => setUsername({ ...username, value: e.target.value })}
        />
        <input
          required 
          type="password" 
          name="password" 
          id="password-field"
          className={`login-form-field ${password.valid ? '' : 'input-error'}`} 
          placeholder="Password" 
          onBlur={(e) => setPassword({ ...password, value: e.target.value })}
        />
        <section id="button-section">
          <button 
            type="submit" 
            id="login-button"
            onClick={(e) => attemptLogin(e)}
          >Login</button>
          <p id="create-account-link">Don't have an account?</p>
        </section>
      </form>
      <div id='login-design-container' className="flex-center">
        <h2 style={{ color: 'white'}}>This will have a blob</h2>
      </div>
    </div>
  )
}