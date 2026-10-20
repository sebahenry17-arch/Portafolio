import { Typography } from 'antd';
import { ExperienceCard } from '../molecules/ExperienceCard.jsx'; // Importamos la molécula

const { Title } = Typography;

export function ExperienceSection({ experience = [] }) {
    return (
        <div id="experiencia" style={{ textAlign: 'left' }}>
            <Title level={2} style={{ marginBottom: 32, fontWeight: 700 }}>
                Experiencia Laboral
            </Title>

            {/* Usamos la molécula mapeando los datos */}
            {experience.map((exp) => (
                <ExperienceCard key={exp.id} {...exp} />
            ))}
        </div>
    );
}