import { ConfigProvider } from 'antd';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#6366f1', // Indigo elegante
              borderRadius: 8,
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              colorBgContainer: '#ffffff',
            },
          }}
      >
        <HomePage />
      </ConfigProvider>
  );
}