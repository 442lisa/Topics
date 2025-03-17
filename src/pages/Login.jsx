import { Form, Input, Button, message } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    console.log('Login success:', values);
    message.success('登入成功！');
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        {/* 新增標題「活動地圖」 */}
        <h1 className="form-title-large">活動地圖</h1>
        <h2 className="form-title">登入</h2>

        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="使用者名稱"
            name="username"
            rules={[{ required: true, message: '請輸入使用者名稱' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密碼"
            name="password"
            rules={[{ required: true, message: '請輸入密碼' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登入
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
