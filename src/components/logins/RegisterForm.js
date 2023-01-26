import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "../../styled/RegisterForm_style.css";

// React BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterForm(){
    const navigate = useNavigate(); // 사용자 위치 파악

    // 로그인 페이지 이동
    const onLoginPageButtonClick = (e) => {
        e.preventDefault();
        navigate('/login');
    };
    return(
        <Container>
          <Row style={{marginTop: '-56px',}}className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary mt-5"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">회원가입</h2>
                    <p className="mb-5">첫 방문을 환영해요!</p>
                    <div className="mb-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            아이디
                          </Form.Label>
                          <Form.Control type="text" placeholder="아이디 입력" />
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
                          controlId="formBasicPasswordCheck"
                        >
                          <Form.Label>비밀번호 확인</Form.Label>
                          <Form.Control type="password" placeholder="비밀번호 확인" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicName"
                        >
                          <Form.Label>이름</Form.Label>
                          <Form.Control type="text" placeholder="이름" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicAge"
                        >
                          <Form.Label>나이</Form.Label>
                          <Form.Control type="text" placeholder="나이" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicBirthday"
                        >
                          <Form.Label>생년월일</Form.Label>
                          <Form.Control type="text" placeholder="생년월일" />
                        </Form.Group>
                        
                        <div className="d-grid">
                          <Button variant="primary" type="submit">
                            회원가입
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          계정이 이미 있으신가요?{" "}
                          <a href="#!" className="text-primary fw-bold" onClick={onLoginPageButtonClick}>
                            로그인
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

export default RegisterForm;

/*
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

*/