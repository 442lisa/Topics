// Sidebar.jsx - 左側導覽列（可自訂項目）
import React from "react";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>導覽列</h2>
      <ul>
        <li>🏠 首頁 {/* TODO: 改為導向首頁 */}</li>
        <li>🗓 我的活動 {/* TODO: 導向使用者活動頁 */}</li>
        <li>⭐ 收藏清單 {/* TODO: 收藏功能頁面 */}</li>
        <li>⚙️ 設定 {/* TODO: 帳號設定或登出 */}</li>
      </ul>
    </div>
  );
}
