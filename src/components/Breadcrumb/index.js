import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbEX({ name }) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Bảng quản trị</Breadcrumb.Item>
            <Breadcrumb.Item active>{name}</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadcrumbEX;
