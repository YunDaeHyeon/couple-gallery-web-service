import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState,  } from 'react';
import "../../styled/FindPwdForm_style.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authentiaction/auth';

// React BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';

function FindPwdForm(){
  const [findUser, setFindUser] = useState({
    userId : '',
    userName : '',
    userBirthday : '',
  });

  const { userId, userName, userBirthday } = findUser;

  const onInputChange = (e) => {
    console.log(e.target.value);
    const {id, value} = e.target;
    setFindUser({
        ...findUser,
        [id] : value,
    });
  }

  return(
    <Container>
    <Row style={{marginTop: '-56px',}}className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={8} lg={6} xs={12}>
        <div className="border border-3 border-primary"></div>
        <Card className="shadow">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-uppercase ">비밀번호 찾기</h2>
              <p className="mb-5">null</p>
              <div className="mb-3">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center">
                      아이디
                    </Form.Label>
                    <Form.Control 
                      id="userId"
                      type="text" 
                      placeholder="아이디 입력"
                      value={userId}
                      onChange={onInputChange} 
                      />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                  >
                    <Form.Label>이름</Form.Label>
                    <Form.Control 
                      id="userName"
                      type="text" 
                      placeholder="이름" 
                      value={userName} 
                      onChange={onInputChange}/>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                  >
                    <Form.Label>생년월일</Form.Label>
                    <Form.Control 
                      id="userBirthday"
                      type="text" 
                      placeholder="ex) 2022-01-01" 
                      value={userBirthday} 
                      onChange={onInputChange}/>
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary">
                      비밀번호 찾기
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
    );
}

export default FindPwdForm;