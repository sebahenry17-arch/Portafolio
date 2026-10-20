import { useState } from 'react';
import { Form, Button, Alert } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { FormField } from '../molecules/FormField.jsx';

export function ContactForm() {
    const [form] = Form.useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onFinish = (values) => {
        console.log("Mensaje recibido:", values);
        setIsSubmitted(true);
        form.resetFields();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'left' }}>
            {isSubmitted && (
                <Alert title="¡Mensaje enviado con éxito!" type="success" showIcon style={{ marginBottom: 24, borderRadius: 8 }} />
            )}

            <Form form={form} layout="vertical" onFinish={onFinish} size="large">


                <FormField
                    name="nombre"
                    label="Nombre Completo"
                    rules={[{ required: true, message: 'Tu nombre es obligatorio' }, { min: 3, message: 'Mínimo 3 caracteres' }]}
                />

                <FormField
                    name="email"
                    label="Correo Electrónico"
                    rules={[{ required: true, message: 'El correo es obligatorio' }, { type: 'email', message: 'Correo inválido' }]}
                />

                <FormField
                    name="mensaje"
                    label="Mensaje"
                    isTextArea={true}
                    rules={[{ required: true, message: 'Por favor, escribe un mensaje' }]}
                />

                <Form.Item>
                    <Button type="primary" htmlType="submit" icon={<SendOutlined />} block style={{ borderRadius: 8, height: 48, fontWeight: 600, background: '#6366f1' }}>
                        Enviar Mensaje
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}