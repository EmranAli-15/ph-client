import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { sidebarGenerator } from "../../utils/sidebarGenerator";
import { facultyPaths } from "../../routes/faculty.routes";
const { Sider } = Layout;

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student'
};

export default function Sidebar() {

    const role = 'faculty';
    let sidebarItems;

    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sidebarGenerator(adminPaths, userRole.ADMIN)
            break;

        case userRole.FACULTY:
            sidebarItems = sidebarGenerator(facultyPaths, userRole.FACULTY)
            break;

        default:
            break;
    }

    return (
        <Sider style={{ height: '100vh' }}
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div style={{
                color: 'white',
                height: '4rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1>PH Uni</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    )
}
