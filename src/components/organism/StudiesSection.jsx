import { Typography } from 'antd';
import { StudyCard } from '../molecules/StudyCard.jsx'; // Importamos la molécula

const { Title } = Typography;

export function StudiesSection({ studies = [] }) {
    return (
        <div id="estudios" style={{ textAlign: 'left' }}>
            <Title level={2} style={{ marginBottom: 32, fontWeight: 700 }}>
                Formación Académica
            </Title>

            {/* Usamos la molécula mapeando los datos */}
            {studies.map((study) => (
                <StudyCard key={study.id} {...study} />
            ))}
        </div>
    );
}