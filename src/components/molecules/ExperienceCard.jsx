import { Typography } from 'antd';
const { Title, Text } = Typography;

export function ExperienceCard({ role, company, startDate, endDate }) {
    return (
        <div style={{ marginBottom: 24, paddingLeft: 16, borderLeft: '3px solid #6366f1' }}>
            <Title level={5} style={{ margin: 0 }}>{role}</Title>
            <Text strong style={{ color: '#6366f1' }}>{company}</Text>
            <br />
            <Text type="secondary">{startDate} — {endDate}</Text>
        </div>
    );
}