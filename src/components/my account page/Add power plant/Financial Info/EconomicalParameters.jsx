import { Button, DatePicker, Input, Space, Tooltip } from "antd";
import { ExclamationOutlined } from "@ant-design/icons";

const EconomicalParameters = () => {
  return (
    <>
      <section className="financial-info">
        <div className="financial-data-chart">
          <h1>Economical Parameters</h1>
          <div className="datepicker">
            <DatePicker picker="year" />
          </div>
          <div className="data-chert">
            <Space>
              <Input addonBefore="January" />
              <Input addonBefore="February" />
              <Input addonBefore="March" />
            </Space>
            <Space>
              <Input addonBefore="April" />
              <Input addonBefore="February" />
              <Input addonBefore="March" />
            </Space>
            <Space>
              <Input addonBefore="January" />
              <Input addonBefore="February" />
              <Input addonBefore="March" />
            </Space>
            <Space>
              <Input addonBefore="January" />
              <Input addonBefore="February" />
              <Input addonBefore="March" />
            </Space>
          </div>
          <Button>Save</Button>
        </div>
      </section>
    </>
  );
};

export default EconomicalParameters;
