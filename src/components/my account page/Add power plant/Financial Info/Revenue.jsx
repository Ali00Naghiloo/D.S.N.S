import { Space, Input, Tooltip, DatePicker, Button } from "antd";
import { ExclamationOutlined } from "@ant-design/icons";

const Revenue = () => {
  return (
    <>
      <section className="financial-info">
        <div className="financial-data-chart">
          <h1>
            Actual Revenue{" "}
            <Tooltip
              title="Information:
The revenue is automatically calculated based on the system data.
Once the user fills in the actual values, the actual values will replace the Calculated ones.
The values that are entered as Actual Revenue is accessible as 'Confirmed Revenue' "
            >
              <ExclamationOutlined />
              {/* <p>{moment("YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</p> */}
            </Tooltip>{" "}
          </h1>
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
          <Button>Save Year</Button>
        </div>
      </section>
    </>
  );
};

export default Revenue;
