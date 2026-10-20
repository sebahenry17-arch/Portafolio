import { Typography, Row, Col } from 'antd';
import { ProjectCard } from '../molecules/ProjectCard';

const { Title } = Typography;

export function ProjectsSection({ projects = [] }) {
    return (
        <div className="glass-panel" id="proyectos">
            <Title level={2} style={{ textAlign: 'center', marginBottom: 40, fontWeight: 700 }}>
                Proyectos Destacados
            </Title>
            <Row gutter={[24, 24]}>
                {projects.map((proyecto) => (
                    <Col xs={24} sm={12} key={proyecto.id}>
                        <ProjectCard {...proyecto} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}