import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, message, Select, Upload } from "antd";
import { Option } from "antd/lib/mentions";

const CompanyInformation = () => {
  const { TextArea } = Input;
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <section className="company-info-continer">
        <section>
          <h1 style={{ fontSize: "2em" }}>Company Information</h1>
          <div>
            <span className="title">Name</span>
            <Input placeholder="Name" />
          </div>
          <div>
            <span className="title">Phone Number</span>
            <Input placeholder="Phone Number" />
          </div>
          <div>
            <span className="title">Postal Number</span>
            <Input placeholder="Postal address" />
          </div>
          <div>
            <span className="title">Email Address</span>
            <Input placeholder="Email address" />
          </div>
          <div>
            <span className="title">Fax Number</span>
            <Input placeholder="Fax Number" />
          </div>
          <div>
            <span className="title">Logo</span>
            <div>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click Here!</Button>
              </Upload>
            </div>
          </div>
          <div>
            <span className="title">Note</span>
            <TextArea placeholder="Note" />
          </div>
        </section>

        <section>
          <h1>Contact Person Information</h1>
          <div>
            <span className="title">Salution</span>
            <Select>
              <Option value="Mr">Mr.</Option>
              <Option value="Ms">Ms.</Option>
            </Select>
          </div>
          <div>
            <span className="title">Name</span>
            <Input placeholder="Name" />
          </div>
          <div>
            <span className="title">Organizational Level</span>
            <Input placeholder="Organizational Level" />
          </div>
          <div>
            <span className="title">Email Address</span>
            <Input placeholder="Email Address" />
          </div>
          <div>
            <span className="title">Phone Number</span>
            <Input placeholder="Phone Number" />
          </div>
          <div>
            <span className="title">Note</span>
            <TextArea placeholder="" />
          </div>
        </section>
        <section>
          <h1>Preferences</h1>
          <Checkbox>Newsletter subscription</Checkbox>
        </section>
        <section>
          <h1>Password</h1>
          <Input placeholder="Current Password" />
          <Input placeholder="New Password" />
          <Input placeholder="Confirm New Password" />
        </section>
        <section>
          <Button type="primary">Save Changes</Button>
        </section>
      </section>
    </>
  );
};

export default CompanyInformation;
