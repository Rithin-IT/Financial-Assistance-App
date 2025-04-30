import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Row, Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { FaGraduationCap, FaMoneyBill, FaHandshake, FaDollarSign } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';



function Navigate() {

  const [showAnswers, setShowAnswers] = useState([false, false, false, false]);

  const toggleFAQ = (index) => {
    const updatedAnswers = [...showAnswers];
    updatedAnswers[index] = !updatedAnswers[index];
    setShowAnswers(updatedAnswers);
  };

  const styles = {
    header: {
      backgroundColor: '#1D3557',
      color: 'white',
      padding: '30px',
      textAlign: 'center',
      fontFamily: '"Roboto", sans-serif',
    },
    introSection: {
      backgroundColor: '#f1f1f1',
      padding: '20px',
      textAlign: 'center',
    },
    sectionTitle: {
      color: '#1D3557',
      marginBottom: '15px',
      fontSize: '2em',
      fontWeight: 'bold',
    },
    assistanceCard: {
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '25px',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    assistanceCardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 14px rgba(0, 0, 0, 0.15)',
    },
    iconStyle: {
      fontSize: '3rem',
      color: '#1D3557',
      marginBottom: '10px',
    },
    faqSection: {
      backgroundColor: '#fff',
      padding: '20px',
      marginTop: '30px',
    },
    faqItem: {
      marginBottom: '15px',
      cursor: 'pointer',
      color: '#00aaff',
      fontSize: '1.2em',
    },
    faqAnswer: {
      marginTop: '10px',
      paddingLeft: '15px',
      fontSize: '1.1em',
      color: '#555',
      backgroundColor: '#f9f9f9',
      padding: '10px',
      borderRadius: '5px',
    },
    ctaButton: {
      backgroundColor: '#00aaff',
      padding: '15px 30px',
      border: 'none',
      color: 'white',
      fontSize: '18px',
      cursor: 'pointer',
      borderRadius: '5px',
      display: 'block',
      margin: '30px auto',
      transition: 'background-color 0.3s ease',
    },
    ctaButtonHover: {
      backgroundColor: '#007bb5',
    },
    footer: {
      textAlign: 'center',
      padding: '30px',
      backgroundColor: '#1D3557',
      color: 'white',
      fontSize: '0.9em',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 15px',
    },
    sectionSeparator: {
      width: '100%',
      height: '5px',
      backgroundColor: '#00aaff',
      margin: '40px 0',
    },
  };

  return <div>
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', color: '#333' }}>
      {/* Header */}
      <header style={styles.header}>
        <Row>
          <Col sm="7" style={{ marginLeft: "245px" }}>
            <h1>Explore Financial Assistance Opportunities</h1>
            <p>Learn about the different types of financial aid available to help you achieve your goals</p>
          </Col>
          <Col sm="3">
            <Nav>
              <NavDropdown title="User" style={{ color: "white" }}>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                <NavDropdown.Item href="/login">
                  Login
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/admin/login" style={{ color: "white" }}>Admin Login</Nav.Link>
              <Nav.Link href="expert/login" style={{ color: "white" }}>Expert Login</Nav.Link>
            </Nav>
          </Col>


        </Row>

      </header>

      <main style={styles.container}>
        {/* Introduction Section */}
        <section style={styles.introSection}>
          <h2 style={styles.sectionTitle}>What is Financial Assistance?</h2>
          <p>Financial assistance refers to monetary support that helps individuals and organizations manage expenses or achieve specific objectives. It comes in various forms, including grants, loans, scholarships, and more.</p>
        </section>

        <div style={styles.sectionSeparator}></div>

        {/* Accordian */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Overview</Accordion.Header>
            <Accordion.Body>
              {/* Types of Financial Assistance */}
              <section>
                <h3 style={styles.sectionTitle}>Types of Financial Assistance</h3>

                {/* Grant Section */}
                <div
                  style={{
                    ...styles.assistanceCard,
                    ...styles.assistanceCardHover,
                  }}
                >
                  <FaHandshake style={styles.iconStyle} />
                  <h4>Grants</h4>
                  <p>Grants are financial awards that do not require repayment, typically provided by government agencies or private organizations for specific purposes like research or education.</p>
                  <p><strong>Example:</strong> Research funding from government bodies or educational grants for underprivileged students.</p>
                </div>

                {/* Loan Section */}
                <div
                  style={{
                    ...styles.assistanceCard,
                    ...styles.assistanceCardHover,
                  }}
                >
                  <FaDollarSign style={styles.iconStyle} />
                  <h4>Loans</h4>
                  <p>Loans are borrowed sums of money that must be repaid with interest. They can be used for personal, business, or educational needs.</p>
                  <p><strong>Example:</strong> Personal loans, student loans, or small business loans.</p>
                </div>

                {/* Scholarship Section */}
                <div
                  style={{
                    ...styles.assistanceCard,
                    ...styles.assistanceCardHover,
                  }}
                >
                  <FaGraduationCap style={styles.iconStyle} />
                  <h4>Scholarships</h4>
                  <p>Scholarships are awards given to students based on merit or need. These funds are typically used to cover tuition and other educational expenses.</p>
                  <p><strong>Example:</strong> Academic scholarships or athletic scholarships for college students.</p>
                </div>

                {/* Subsidy Section */}
                <div
                  style={{
                    ...styles.assistanceCard,
                    ...styles.assistanceCardHover,
                  }}
                >
                  <FaMoneyBill style={styles.iconStyle} />
                  <h4>Subsidies</h4>
                  <p>Subsidies are financial supports provided by the government or other organizations to lower the cost of essential goods and services for certain individuals or businesses.</p>
                  <p><strong>Example:</strong> Housing subsidies or food assistance programs for low-income families.</p>
                </div>
              </section>

              <div style={styles.sectionSeparator}></div>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Frequently Asked Questions</Accordion.Header>
            <Accordion.Body>
              {/* FAQ Section */}
              <section style={styles.faqSection}>
                <h3 style={styles.sectionTitle}>Frequently Asked Questions</h3>

                {/* FAQ 1 */}
                <div style={styles.faqItem} onClick={() => toggleFAQ(0)}>
                  <h4>What is the difference between a grant and a loan?</h4>
                  {showAnswers[0] && (
                    <div style={styles.faqAnswer}>
                      <p>A grant is a form of financial aid that does not require repayment, whereas a loan must be repaid with interest. Grants are often given for specific purposes like education or research, while loans are more flexible and can be used for various needs.</p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div style={styles.faqItem} onClick={() => toggleFAQ(1)}>
                  <h4>Who is eligible for financial assistance?</h4>
                  {showAnswers[1] && (
                    <div style={styles.faqAnswer}>
                      <p>Eligibility for financial assistance varies depending on the program. For example, students may qualify for scholarships or loans based on their academic performance, while businesses may qualify for grants based on their industry or goals.</p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div style={styles.faqItem} onClick={() => toggleFAQ(2)}>
                  <h4>How do I apply for a financial grant?</h4>
                  {showAnswers[2] && (
                    <div style={styles.faqAnswer}>
                      <p>To apply for a financial grant, you'll typically need to complete an online application, submit documents like financial statements or project proposals, and meet specific eligibility criteria. Deadlines and application processes vary by grant provider.</p>
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div style={styles.faqItem} onClick={() => toggleFAQ(3)}>
                  <h4>What are some common types of financial aid for students?</h4>
                  {showAnswers[3] && (
                    <div style={styles.faqAnswer}>
                      <p>Common types of financial aid for students include scholarships, grants, and loans. Scholarships and grants do not require repayment, while loans must be repaid after graduation or when you leave school.</p>
                    </div>
                  )}
                </div>
              </section>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </main>
      <br /><br /><br /><br /><br /><br />
      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Financial Assistance Portal | All rights reserved.</p>
      </footer>
    </div>
  </div>
}

export default Navigate