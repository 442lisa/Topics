import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "../styles/home.css";

// 游標點擊後儲存經緯度
function ClickMarker({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e.latlng);
    },
  });
  return null;
}

export default function Home() {
  const [markers, setMarkers] = useState([]);

  const handleMapClick = (latlng) => {
    setMarkers((prev) => [...prev, latlng]);
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <h3>導覽列</h3>
        <ul className="nav-list">
          <li>選項1 {/* TODO: 可自訂導覽項目 */}</li>
          <li>選項2</li>
          <li>選項3</li>
        </ul>

        {/* 登入 / 註冊區塊 */}
        <div className="auth-links">
          <Link to="/login">登入</Link>
          <span> / </span>
          <Link to="/register">註冊</Link>
        </div>
      </div>

      <div className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="搜尋關鍵字..." />
  
          <select>
            <option value="">篩選器</option>
            <option value="filter1">選項一</option>
            <option value="filter2">選項二</option>
            <option value="filter3">選項三</option>
          </select>
        </div>

        <MapContainer center={[25.038, 121.5645]} zoom={13} className="map">
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ClickMarker onClick={handleMapClick} />
          {markers.map((position, idx) => (
            <Marker key={idx} position={position}>
              <Popup>
                這是點選的座標：<br />
                經度：{position.lng.toFixed(4)}<br />
                緯度：{position.lat.toFixed(4)}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
