import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../styles/Home.css";
import eventData from "../data/randomEvent.json";
import { useEffect, useState } from "react";

// 自訂 Marker 圖示 (避免預設圖示錯誤)
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function Home() {
  const [events, setEvents] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("activity");
  const [openFilter, setOpenFilter] = useState(null); // 追蹤哪個篩選在展開

  useEffect(() => {
    const handleClickOutside = (event) => {
      // 只要點的不是篩選器或下拉選單，就關掉
      if (!event.target.closest(".filter-group")) {
        setOpenFilter(null);
      }
    };
    
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  return (
    <div className="home-container">
      {/* 側邊欄 */}
      <div className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          {sidebarOpen && <span className="sidebar-title">導覽</span>}          <button
            className="toggle-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
        </div>
        {sidebarOpen && (
          <>
            <ul className="nav-list">
              <li
                className={activePage === "activity" ? "active" : ""}
                onClick={() => setActivePage("activity")}
              >
                活動列表
              </li>
              <li
                className={activePage === "favorites" ? "active" : ""}
                onClick={() => setActivePage("favorites")}
              >
                我的收藏
              </li>
              <li
                className={activePage === "settings" ? "active" : ""}
                onClick={() => setActivePage("settings")}
              >
                設定
              </li>
            </ul>
            <div className="auth-links">
              <a href="Login">登入</a>
              <a href="Register">註冊</a>
            </div>
          </>
        )}
      </div>

      {/* 主內容區域 */}
      <div className="main-content">
        {/* 搜尋欄 */}
        <div className="search-bar">
          <input type="text" placeholder="搜尋活動..." className="search-input" />
          <div className="filter-buttons">
              <div className="filter-group">
                <button
                  className="filter-pill"
                  onClick={() => setOpenFilter(openFilter === 'category' ? null : 'category')}
                >
                  類別
                </button>
                {openFilter === 'category' && (
                  <div className="filter-dropdown">
                    <div className="dropdown-option">演唱會</div>
                    <div className="dropdown-option">市集</div>
                    <div className="dropdown-option">展覽</div>
                  </div>
                )}
              </div>

              <div className="filter-group">
                <button
                  className="filter-pill"
                  onClick={() => setOpenFilter(openFilter === 'city' ? null : 'city')}
                >
                  城市
                </button>
                {openFilter === 'city' && (
                  <div className="filter-dropdown">
                    <div className="dropdown-option">台北</div>
                    <div className="dropdown-option">新北</div>
                    <div className="dropdown-option">台中</div>
                  </div>
                )}
              </div>

              <div className="filter-group">
                <button
                  className="filter-pill"
                  onClick={() => setOpenFilter(openFilter === 'date' ? null : 'date')}
                >
                  日期
                </button>
                {openFilter === 'date' && (
                  <div className="filter-dropdown">
                    <div className="dropdown-option">今天</div>
                    <div className="dropdown-option">明天</div>
                    <div className="dropdown-option">這週</div>
                  </div>
                )}
              </div>
          </div>
        </div>

        {/* 地圖 */}
        <MapContainer
          center={[25.033964, 121.564468]}
          zoom={13}
          style={{ height: "80vh", width: "100%" }}
          className="map"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* 顯示活動點 */}
          {eventData.map((event) => (
            <Marker
              key={event.id}
              position={[event.latitude, event.longitude]}
              icon={customIcon}
            >
              <Tooltip direction="top" offset={[0, -20]} opacity={1}>
                <div>
                  <strong>{event.name}</strong>
                  <br />
                  {event.content}
                  <br />
                  {event.address}
                </div>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Home;
