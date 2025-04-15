// SearchBar.jsx - 上方搜尋欄與篩選欄（目前為靜態）
import React from "react";
import "../styles/searchbar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      {/* 主搜尋框 */}
      <input type="text" placeholder="搜尋活動..." />

      {/* 三個預留篩選欄位 */}
      <select>
        <option>篩選條件一</option>
        {/* TODO: 動態選項（類別、地區等） */}
      </select>
      <select>
        <option>篩選條件二</option>
      </select>
      <select>
        <option>篩選條件三</option>
      </select>
    </div>
  );
}
