import { Layout } from "antd";
const { Content, Header } = Layout;
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function MainLayout() {

    return (
        <Layout style={{ height: '100vh' }}>
            <Sidebar></Sidebar>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        <Outlet></Outlet>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
