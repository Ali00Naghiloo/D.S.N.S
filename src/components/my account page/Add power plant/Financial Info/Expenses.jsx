import { Space, Input, Tooltip, DatePicker, Button } from "antd";
import { ExclamationOutlined } from "@ant-design/icons";
// import moment from "jalali-moment";

const Expenses = () => {
  return (
    <>
      <section className="financial-info">
        <div className="financial-data-chart">
          <h1>
            Operational Expenses (Calculated){" "}
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

        <div className="financial-data-chart">
          <h1>Total Operational Expenses (Actual)</h1>
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

        <div className="financial-data-chart">
          <h1>
            Water Fee (Actual){" "}
            <Tooltip
              title="Information:
              The inflated Calculated oprational expenses values will be used in the calculations.
              Once the user fills in the actual values, the actual values will replace the Calculated ones."
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

export default Expenses;
