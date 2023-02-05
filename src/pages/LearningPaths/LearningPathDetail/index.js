import { useState } from 'react';
import { Button, Modal, Table, Form, Accordion, Card } from 'react-bootstrap';

import HeadingTable from '~/components/HeadingTable';

function LearningPathDetail({ show, setShow, data }) {
    const [title, setTitle] = useState(data.title);
    const [priority, setPriority] = useState(data.priority);
    const [image, setImage] = useState(data.image);
    const [slug, setSlug] = useState(data.slug);
    const [content, setContent] = useState(data.content);
    const [description, setDescription] = useState(data.description);
    const [groups, setGroups] = useState(data.groups);

    return (
        <Modal show={show} onHide={() => setShow(false)} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Xác nhận xóa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered>
                    <HeadingTable
                        headings={[{ title: 'Tên mô tả' }, { title: 'Giá trị hiện tại' }, { title: 'Hành động' }]}
                    />

                    <tbody>
                        <tr>
                            <td className="text-center">Tên lộ trình</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Tên lộ trình"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Slug</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        placeholder="Slug"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
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
                                        placeholder="Sự ưu tiên"
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Ảnh nền</td>
                            <td className="text-center">
                                <Card style={{ width: '18rem', margin: 'auto' }}>
                                    <Card.Img src={image} alt="Preview" />
                                </Card>
                            </td>
                            <td className="text-center">
                                <Button variant="success" size="sm">
                                    Chọn ảnh
                                </Button>
                                <Form.Control type="file" hidden />
                            </td>
                        </tr>

                        <tr>
                            <td className="text-center">Nội dung</td>
                            <td className="text-center">
                                <Form.Group>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Nội dung lộ trình"
                                        style={{ height: 160 }}
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
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
                                        placeholder="Mô tả lộ trình"
                                        style={{ height: 100 }}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </Form.Group>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Form.Label className="mb-2 mt-3">Nhóm khóa học:</Form.Label>
                <Accordion className="mb-4">
                    {groups.map((group, index) => (
                        <Accordion.Item key={group._id} eventKey={index}>
                            <Accordion.Header>{group.title}</Accordion.Header>
                            <Accordion.Body>
                                <Table striped bordered>
                                    <HeadingTable
                                        headings={[
                                            { title: 'Tên mô tả' },
                                            { title: 'Giá trị hiện tại' },
                                            { title: 'Hành động' },
                                        ]}
                                    />

                                    <tbody>
                                        <tr>
                                            <td className="text-center">Tên nhóm</td>
                                            <td className="text-center">
                                                <Form.Group>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Tên nhóm"
                                                        defaultValue={group.title}
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
                                                        defaultValue={group.priority}
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
                                                        style={{ height: 140 }}
                                                        defaultValue={group.description}
                                                    />
                                                </Form.Group>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-center">Số khóa học</td>
                                            <td className="text-center">{group.courses.length}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <Button className="float-end ms-2" size="sm">
                    Lưu
                </Button>
                <Button variant="secondary" className="float-end" size="sm" onClick={() => setShow(false)}>
                    Đóng
                </Button>
            </Modal.Body>
        </Modal>
    );
}

export default LearningPathDetail;
