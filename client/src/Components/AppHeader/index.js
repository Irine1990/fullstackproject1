import { Typography, Space, Badge } from "antd";
import { MessageOutlined, BellOutlined, GlobalOutlined } from "@ant-design/icons";

function AppHeader() {
    return <div className="AppHeader">
        <GlobalOutlined />
        <Typography.Title>Admin Dashboard</Typography.Title>
        <Space>
            <Badge count={10} dot>
                <MessageOutlined style={{ fontsize: 24 }} />
            </Badge>
            <Badge count={20}>
                <BellOutlined />
            </Badge>

        </Space>
    </div>

}

export default AppHeader;