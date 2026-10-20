    import { Card, Typography } from 'antd';
    const { Title, Text } = Typography;

    export function StudyCard({ degree, institution, year }) {
        return (
            <Card size="small" bordered={false} style={{ background: 'rgba(255,255,255,0.6)', borderRadius: 12, marginBottom: 16 }}>
                <Title level={5} style={{ margin: 0 }}>{degree}</Title>
                <Text strong>{institution}</Text>
                <br />
                <Text type="secondary">{year}</Text>
            </Card>
        );
    }