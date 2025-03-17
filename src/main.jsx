import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ConfigProvider } from 'antd'
import './index.css'

const theme = {
  token: {
    colorPrimary: '#722ed1', // 主要按鈕顏色
    colorLink: '#1890ff', // 連結顏色
    borderRadius: 8, // 全局圓角設定
    fontSize: 16, // 全局字體大小
  },
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider theme={theme}>
    <App />
  </ConfigProvider>
)
