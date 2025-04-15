import "../styles/global.css";
import "../styles/login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="logo">活動地圖</h1>
        <h2>登入</h2>
        <form>
          <input type="text" className="input-field" placeholder="帳號" required />
          <input type="password" className="input-field" placeholder="密碼" required />

          {/* ✅ 包一層讓按鈕跟切換文字都在一起，且靠右 */}
          <div className="form-footer">
            <button type="submit" className="auth-button">登入</button>
            <div className="switch-link">
              沒有帳號？<Link to="/register">點擊註冊</Link>
            </div>
          </div>
        </form>

        {/* ✅ 回首頁置中 */}
        <div className="home-link">
          <Link to="/">← 回首頁</Link>
        </div>
      </div>
    </div>
  );
}
