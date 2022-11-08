import { UploadOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, message, Upload } from "antd";

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
          <h1>CompanyInformation</h1>
          <Input placeholder="Name" />
          <Input placeholder="Postal address" />
          <Input placeholder="Email address" />
          <Input placeholder="Fax Number" />
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload Logo</Button>
          </Upload>
          <TextArea placeholder="Note" />
        </section>
        <section>
          <h1>Contact Person Information</h1>
          <Input placeholder="Salution" />
          <Input placeholder="Name" />
          <Input placeholder="Organizational Level" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
          <TextArea placeholder="Note" />
        </section>
        <section>
          <h1>Preferences</h1>
          <Checkbox>Newsletter subscription</Checkbox>
        </section>
        <section>
          <Button type="primary">Save Changes</Button>
        </section>
        <section>
          <h1>Password</h1>
          <Input placeholder="Current Password" />
          <Input placeholder="New Password" />
          <Input placeholder="Confirm New Password" />
        </section>
      </section>
    </>
  );
};

export default CompanyInformation;
