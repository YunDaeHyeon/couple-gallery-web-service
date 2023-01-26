import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "../../styled/LoginForm_style.css";

// React BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm(){
  const navigate = useNavigate(); // 사용자 위치 파악

  // 회원가입페이지 이동
  const onRegisterPageButtonClick = (e) => {
      e.preventDefault();
      navigate('/register');
  };

  return(
        <Container>
          <Row style={{marginTop: '-56px',}}className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">로그인</h2>
                    <p className="mb-5">아이디와 비밀번호를 입력해주세요!</p>
                    <div className="mb-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            아이디
                          </Form.Label>
                          <Form.Control type="email" placeholder="아이디 입력" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>비밀번호</Form.Label>
                          <Form.Control type="password" placeholder="비밀번호 입력" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p className="small">
                            <a className="text-primary" href="#!">
                              비밀번호를 잊으셨나요?
                            </a>
                          </p>
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            로그인
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          혹시 계정이 없나요?{" "}
                          <a href="#!" className="text-primary fw-bold" onClick={onRegisterPageButtonClick}>
                            회원가입
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    );
}

export default LoginForm;