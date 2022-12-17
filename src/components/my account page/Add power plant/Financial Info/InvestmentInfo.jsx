import {
  Button,
  Col,
  DatePicker,
  Input,
  Row,
  Select,
  Space,
  Tooltip,
} from "antd";
import { PlusOutlined, ExclamationOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

const InvestmentInfo = () => {
  dayjs.extend(customParseFormat);
  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
  const dateFormat = "YYYY/MM/DD";

  return (
    <>
      <section className="financial-info">
        <section>
          <h1>Investment Information</h1>
          <Input addonBefore="Investment Amount (m.Rials)" />
          <Input addonBefore="Investment date (mm/yyyy)" />
          <Input addonBefore="Project life Span (Years)" />
          <Input addonBefore="Investment Discount Rate (%)" />
        </section>

        <section>
          <h1>Income tax rate (%)</h1>
          <Input.Group compact>
            <Input
              style={{
                width: "50%",
              }}
            />
            <DatePicker
              style={{
                width: "50%",
              }}
              picker="year"
            />
          </Input.Group>
          <Button
            onClick={() => {
              return (
                <>
                  <Input
                    style={{
                      width: "50%",
                    }}
                  />
                  <DatePicker
                    style={{
                      width: "50%",
                    }}
                    picker="year"
                  />
                </>
              );
            }}
          >
            <PlusOutlined />
          </Button>
        </section>

        <section>
          <Input addonBefore="Depreciation Parameters:" />
          <div>
            <span>Type :</span>
            <Select defaultValue="Linear">
              <Select.Option value="Linear">Linear</Select.Option>
              <Select.Option value="Linear to zero">
                Linear to zero
              </Select.Option>
              <Select.Option value="Accelerated">Accelerated</Select.Option>
            </Select>
          </div>
          <div>
            <span>Starting at :</span>
            <DatePicker />
          </div>
          <Input addonBefore="Rate (%p.a.)" />
          <Input type="number" addonBefore="Length (Years)" />
          <Input addonBefore="Scrap (%)" />
        </section>

        <section>
          <h1>Any Revenue increase coefficient (%)</h1>
          <Input.Group compact>
            <Input
              style={{
                width: "50%",
              }}
              addonAfter={
                <Tooltip title="Information: Any rate that is awarded to the project that increase the revenue. (e.g. Localization incentive coefficient)">
                  <ExclamationOutlined />
                </Tooltip>
              }
            />
            <DatePicker
              style={{
                width: "50%",
              }}
              picker="year"
            />
          </Input.Group>
          <Button
            onClick={() => {
              return (
                <>
                  <Input
                    style={{
                      width: "50%",
                    }}
                  />
                  <DatePicker
                    style={{
                      width: "50%",
                    }}
                    picker="year"
                  />
                </>
              );
            }}
          >
            <PlusOutlined />
          </Button>
        </section>

        <section>
          <h1>Any Revenue reduction coefficient (%)</h1>
          <Input.Group compact>
            <Input
              style={{
                width: "50%",
              }}
              addonAfter={
                <Tooltip title="Information: Any rate that will reduce the project revenue. (e.g. Project revenue reduction due to some PPA obligations or terms.)">
                  <ExclamationOutlined />
                </Tooltip>
              }
            />
            <DatePicker
              style={{
                width: "50%",
              }}
              picker="year"
            />
          </Input.Group>
          <Button
            onClick={() => {
              return (
                <>
                  <Input
                    style={{
                      width: "50%",
                    }}
                  />
                  <DatePicker
                    style={{
                      width: "50%",
                    }}
                    picker="year"
                  />
                </>
              );
            }}
          >
            <PlusOutlined />
          </Button>
        </section>
      </section>
    </>
  );
};

export default InvestmentInfo;
