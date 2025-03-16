import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Table, Row, Col } from "react-bootstrap";
import axios from "axios";

function UpdateExperts() {
    const [viewExperts, setViewExperts] = useState([]);
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        contact: "",
        gender: "",
        designation: "",
        current_organization: "",
        years_of_experience_in_finance: "",
        areas_of_expertise: []
    });

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        axios.get("https://agaram.academy/api/b4/action.php?request=ai_finance_get_all_experts")
            .then((res) => {
                setViewExperts(res.data.data);
            })
            .catch((err) => console.error("Error fetching experts:", err));
    };

    const update = () => {
        // Validation
        if (
            !inputValue.name.trim() ||
            !inputValue.email.trim() ||
            !inputValue.contact.trim() ||
            !inputValue.gender.trim() ||
            !inputValue.designation.trim() ||
            !inputValue.current_organization.trim() ||
            !inputValue.years_of_experience_in_finance.trim() ||
            inputValue.areas_of_expertise.length === 0
        ) {
            alert("Please enter all values");
            return;
        }

        const formData = new FormData();
        formData.append("user_id", 3); // Change this if needed
        formData.append("expert_data", JSON.stringify(inputValue));

        axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_update_expert_profile", formData)
            .then((res) => {
                alert("Updated successfully");
                getApi(); // Refresh list after update
            })
            .catch((err) => console.error("Update failed:", err));
    };

    const handleEdit = (expert) => {
        setInputValue({ ...expert });
    };

    const handleDel = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            axios.post("https://agaram.academy/api/b4/action.php?request=ai_finance_delete_expert", { expert_id: id })
                .then(() => {
                    setViewExperts(viewExperts.filter((expert) => expert.id !== id));
                })
                .catch((err) => console.error("Delete failed:", err));
        }
    };

    return (
        <div className="container mt-4">
            <h3>Update Experts Details</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Gender</th>
                        <th>Designation</th>
                        <th>Current Organization</th>
                        <th>Years of Experience</th>
                        <th>Areas of Expertise</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {viewExperts.map((expert) => (
                        <tr key={expert.id}>
                            <td>{expert.name}</td>
                            <td>{expert.email}</td>
                            <td>{expert.contact}</td>
                            <td>{expert.gender}</td>
                            <td>{expert.designation}</td>
                            <td>{expert.current_organization}</td>
                            <td>{expert.years_of_experience_in_finance}</td>
                            <td>{expert.areas_of_expertise.join(", ")}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleEdit(expert)}>Edit</Button>{" "}
                                <Button variant="danger" onClick={() => handleDel(expert.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="mt-4">
                <h4>Edit Expert</h4>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={inputValue.name}
                                    onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={inputValue.email}
                                    onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Contact</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={inputValue.contact}
                                    onChange={(e) => setInputValue({ ...inputValue, contact: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={inputValue.gender}
                                    onChange={(e) => setInputValue({ ...inputValue, gender: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Designation</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={inputValue.designation}
                                    onChange={(e) => setInputValue({ ...inputValue, designation: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Current Organization</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={inputValue.current_organization}
                                    onChange={(e) => setInputValue({ ...inputValue, current_organization: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Years of Experience</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={inputValue.years_of_experience_in_finance}
                                    onChange={(e) => setInputValue({ ...inputValue, years_of_experience_in_finance: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Areas of Expertise</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={inputValue.areas_of_expertise.join(", ")}
                                    onChange={(e) =>
                                        setInputValue({
                                            ...inputValue,
                                            areas_of_expertise: e.target.value.split(",").map((item) => item.trim())
                                        })
                                    }
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="success" className="mt-3" onClick={update}>
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default UpdateExperts;
