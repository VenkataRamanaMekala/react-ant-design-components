import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  Select,
  Card,
  DatePicker,
  Slider,
  Upload,
  message,
  
  Space,
} from "antd";

import { UploadOutlined,  } from "@ant-design/icons";

import type { UploadFile } from "antd/es/upload/interface";

const { TextArea } = Input;
const { Option } = Select;

const RegisterForm: React.FC = () => {
  const [form] = Form.useForm();

  const fruitOptions = ["Orange", "Banana"];

  const [fruits, setFruits] = useState<string[]>([]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [rangeValue, setRangeValue] = useState<number>(50);
  const [quantity, setQuantity] = useState<number>(5);

  const handleSubmit = (values: any) => {
    const finalData = {
      ...values,
      fruits,
      quantity,
      range: rangeValue,
      file: fileList,
    };

    console.log(finalData);

    message.success("Form submitted successfully!");

    form.resetFields();

    setFruits([]);
    setFileList([]);
    setRangeValue(50);
    setQuantity(5);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        background: "#f5f5f5",
      }}
    >
      <Card
        title={
          <div
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            This is your sample Form
          </div>
        }
        style={{
          width: "800px",
          borderRadius: "12px",
          border: "2px solid #1677ff", // overall border color
        }}
      >
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                message: "Please enter first name",
              },
            ]}
          >
            <Input
              placeholder="Enter first name"
              style={{
                width: "250px",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                message: "Please enter last name",
              },
            ]}
          >
            <Input
              placeholder="Enter last name"
              style={{
                width: "250px",
              }}
            />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                message: "Please select gender",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Others">Others</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Choose an Option" name="singleOption">
            <Select
              placeholder="Select Option"
              style={{
                width: "250px",
              }}
            >
              <Option value="Option 1">Option 1</Option>
              <Option value="Option 2">Option 2</Option>
              <Option value="Option 3">Option 3</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Select Multiple Options" name="multiOptions">
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="Option A">Option A</Checkbox>

                <Checkbox value="Option B">Option B</Checkbox>

                <Checkbox value="Option C">Option C</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item label="Auto Suggest" name="flavor">
            <Select
              showSearch
              placeholder="Type flavor..."
              style={{
                width: "250px",
              }}
              options={[
                { value: "Strawberry" },
                { value: "Vanilla" },
                { value: "Mint" },
                { value: "Banana" },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Select your favorite color"
            name="favoriteColor"
            initialValue="#000000"
          >
            <input
              type="color"
              style={{
                width: "60px",
                height: "40px",
                border: "none",
                cursor: "pointer",
              }}
            />
          </Form.Item>

          <Form.Item label="Select Date" name="date">
            <DatePicker
              style={{
                width: "250px",
              }}
            />
          </Form.Item>

    
          <Form.Item label="Scroll to see range value">
            <div
              style={{
                width: "250px",
              }}
            >
              <Slider
                min={0}
                max={100}
                value={rangeValue}
                onChange={(value) => setRangeValue(value)}
              />

              <span
                style={{
                  fontWeight: 600,
                }}
              >
                {rangeValue}
              </span>
            </div>
          </Form.Item>

         
          <Form.Item label="Select Fruits">
            <Select
              mode="multiple"
              placeholder="Select Fruits"
              value={fruits}
              onChange={(value) => setFruits(value)}
              style={{
                width: "250px",
              }}
            >
              {fruitOptions.map((fruit) => (
                <Option key={fruit} value={fruit}>
                  {fruit}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Select Quantity">
            <Space>
              <Button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -1
              </Button>

              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                {quantity}
              </span>

              <Button
                onClick={() =>
                  setQuantity((prev) => (prev < 10 ? prev + 1 : 10))
                }
              >
                +1
              </Button>
            </Space>
          </Form.Item>

          <Form.Item label="Select File">
            <Upload
              beforeUpload={() => false}
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
            >
              <Button icon={<UploadOutlined />}>Choose File</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Long Message" name="message">
            <TextArea
              rows={5}
              placeholder="Write something..."
              style={{
                width: "400px",
              }}
            />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button type="primary" htmlType="submit" size="large">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterForm;
