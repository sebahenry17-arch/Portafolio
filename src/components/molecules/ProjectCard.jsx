import { Card, Tag, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

export function ProjectCard({ title, preview, repoUrl, tags = [] }) {
    return (
        <Card
            hoverable
            style={{ borderRadius: 16, overflow: 'hidden', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            cover={<img alt={title} src={preview} style={{ height: 200, objectFit: 'cover' }} />}
            actions={[
                <Button type="link" icon={<GithubOutlined />} href={repoUrl} target="_blank" key="github">
                    Código Fuente
                </Button>,
            ]}
        >
            <Card.Meta title={<span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{title}</span>} />
            <div style={{ marginTop: 16, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {tags.map((tag) => (
                    <Tag color="cyan" key={tag} style={{ borderRadius: 12, padding: '2px 10px' }}>
                        {tag}
                    </Tag>
                ))}
            </div>
        </Card>
    );
}