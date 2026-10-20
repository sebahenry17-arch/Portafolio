import { Layout, Row, Col, Button, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';


import { portfolioData } from "../data/portfolioData.js";
import {PersonalSection} from "../components/organism/PersonalSection.jsx";
import {ExperienceSection} from "../components/organism/ExperienceSection.jsx";
import {StudiesSection} from "../components/organism/StudiesSection.jsx";
import {ProjectsSection} from "../components/organism/ProjectSection.jsx";
import {ContactForm} from "../components/organism/ContactForm.jsx";
import {Footer} from "../components/organism/Footer.jsx";

const { Content } = Layout;

export function HomePage() {
    return (
        <Layout style={{ background: 'transparent', minHeight: '100vh', paddingTop: '40px' }}>
            <Content style={{ maxWidth: 1000, margin: '0 auto', width: '100%', padding: '0 20px' }}>

                {/* Sección 1: Personal (Delegado a su componente) */}
                <PersonalSection personal={portfolioData.personal} />

                {/* Sección 2: Experiencia y Estudios agrupados */}
                <div className="glass-panel">
                    <Row gutter={[40, 40]}>
                        <Col xs={24} md={12}>
                            <ExperienceSection experience={portfolioData.experience} />
                        </Col>
                        <Col xs={24} md={12}>
                            <StudiesSection studies={portfolioData.studies} />
                        </Col>
                    </Row>
                </div>

                {/* Sección 3: Proyectos (Delegado a su componente) */}
                <ProjectsSection projects={portfolioData.projects} />

                {/* Sección 4: Contacto */}
                <div className="glass-panel" id="contacto" style={{ textAlign: 'center' }}>
                    <Space size="middle" style={{ marginBottom: 40 }}>
                        <Button type="primary" shape="round" icon={<GithubOutlined />} href={portfolioData.socials.github} target="_blank" size="large" style={{ background: '#111827' }}>
                            GitHub
                        </Button>
                        <Button type="primary" shape="round" icon={<LinkedinOutlined />} href={portfolioData.socials.linkedin} target="_blank" size="large" style={{ background: '#0077b5' }}>
                            LinkedIn
                        </Button>
                    </Space>

                    <ContactForm />
                </div>

            </Content>

            <Footer />
        </Layout>
    );
}