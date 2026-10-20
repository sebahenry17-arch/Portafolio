import { useState} from 'react';
import { Layout, Typography } from 'antd';

export function Footer() {

    const [year] = useState(new Date().getFullYear());

    return (
        <Layout.Footer style={{ textAlign: 'center', background: '#fff', padding: '40px 20px', borderTop: '1px solid #f0f0f0' }}>
            <Typography.Text type="secondary">
                © {year || '2026'} Sebastian Developer. Construido con React y Ant Design.
            </Typography.Text>
        </Layout.Footer>
    );
}