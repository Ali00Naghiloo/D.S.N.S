import React from "react";
import { Input, Space, Table, Tabs, Tag } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const App = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Tab1" key="1">
          <Space>
            <Input addonBefore="January" />
            <Input addonBefore="February" />
            <Input addonBefore="March" />
          </Space>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab2" key="2">
          <Space>
            <Input addonBefore="April" />
            <Input addonBefore="February" />
            <Input addonBefore="March" />
          </Space>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab3" key="3">
          <Space>
            <Input addonBefore="January" />
            <Input addonBefore="February" />
            <Input addonBefore="March" />
          </Space>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab4" key="4">
          <Space>
            <Input addonBefore="January" />
            <Input addonBefore="February" />
            <Input addonBefore="March" />
          </Space>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
