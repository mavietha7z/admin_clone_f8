import HeadingTable from '~/components/HeadingTable';
import { Form, Accordion, Table } from 'react-bootstrap';

function AccordionItem({ data, index }) {
    return (
        <Accordion.Item key={data._id} eventKey={index}>
            <Accordion.Header>{data.title}</Accordion.Header>
            <Accordion.Body>
                <Table striped bordered>
                    <HeadingTable
                        headings={[{ title: 'Tên mô tả' }, { title: 'Giá trị hiện tại' }, { title: 'Hành động' }]}
                    />

                    <tbody>
                        <tr>
                            <td className="text-center">Tên nhóm</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tên nhóm"
                                        disabled
                                        defaultValue={data.title}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Sự ưu tiên</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Slug"
                                        disabled
                                        defaultValue={data.priority}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Mô tả</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Mô tả nhóm"
                                        disabled
                                        style={{ height: 140 }}
                                        defaultValue={data.description}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Số khóa học</td>
                            <td className="text-center">
                                <strong>{data.courses.length}</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default AccordionItem;
