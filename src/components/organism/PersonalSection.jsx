import { Avatar, Typography, Button, Space } from 'antd';

const { Title, Paragraph } = Typography;

export function PersonalSection({ personal }) {
    return (
        <div className="glass-panel" id="personal" style={{ textAlign: 'center' }}>
            <Avatar
                src={personal.avatar}
                size={160}
                className="avatar-glow"
            />
            <Title level={1} style={{ marginTop: 24, marginBottom: 8, fontWeight: 700 }}>
                {personal.name}
            </Title>
            <Title level={4} type="secondary" style={{ marginTop: 0, color: '#6366f1' }}>
                {personal.title}
            </Title>
            <Paragraph style={{ fontSize: '1.15rem', maxWidth: 700, margin: '24px auto', lineHeight: 1.8 }}>
                {personal.description}
            </Paragraph>
            <Space size="middle" style={{ marginTop: 16 }}>
                <Button type="primary" shape="round" size="large" href="#contacto" style={{ background: '#6366f1' }}>
                    Contáctame
                </Button>
                <Button shape="round" size="large" href="#proyectos">
                    Ver Proyectos
                </Button>
            </Space>
        </div>
    );
}