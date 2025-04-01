import { useState } from "react";
import "../styles.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="logo">活動地圖</h1>
        <h2>{isLogin ? "登入" : "註冊"}</h2>
        <form>
          {!isLogin && (
            <>
              <div className="role-selection">
                <label>
                  <input type="radio" name="role" value="organizer" required /> 活動主辦方
                </label>
                <label>
                  <input type="radio" name="role" value="user" required /> 一般用戶
                </label>
              </div>
              <input type="text" className="input-field" placeholder="用戶名稱" required />
              <input type="email" className="input-field" placeholder="電子郵件" required />
              <input type="tel" className="input-field" placeholder="手機號碼" required />
            </>
          )}
          <input type="text" className="input-field" placeholder="帳號" required />
          <input type="password" className="input-field" placeholder="密碼" required />
          <button type="submit" className="auth-button">{isLogin ? "登入" : "註冊"}</button>
        </form><br /><br />
        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "沒有帳號？點擊註冊" : "已經有帳號？點擊登入"}
        </p>
      </div>
    </div>
  );
}
