import { Form, Input, Button, message } from 'antd';

const Register = () => {
  const onFinish = (values) => {
    console.log('Register success:', values);
    message.success('註冊成功！');
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        {/* 新增標題「活動地圖」 */}
        <h1 className="form-title-large">活動地圖</h1>
        <h2 className="form-title">註冊</h2>

        <Form
          name="register"
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

          <Form.Item
            label="確認密碼"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: '請再次輸入密碼' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('兩次輸入的密碼不一致'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              註冊
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;

