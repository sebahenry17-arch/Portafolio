import { Form, Input } from 'antd';

export function FormField({ name, label, isTextArea, rules }) {
    return (
        <Form.Item name={name} label={label} rules={rules}>
            {isTextArea ? (
                <Input.TextArea rows={4} style={{ borderRadius: 8 }} placeholder={`Ingresa tu ${label.toLowerCase()}`} />
            ) : (
                <Input style={{ borderRadius: 8 }} placeholder={`Ingresa tu ${label.toLowerCase()}`} />
            )}
        </Form.Item>
    );
}