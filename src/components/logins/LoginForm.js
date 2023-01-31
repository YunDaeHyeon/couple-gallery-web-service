import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from 'axios'; // HTTP 비동기 통신 라이브러리
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styled/LoginForm_style.css";
import { useAuth } from '../../authentiaction/auth';

// React BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm(){
  const auth = useAuth();
  const navigate = useNavigate(); // 사용자 위치 파악
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const idInput = useRef();

  const onIdChange = (e) => {
    setId(e.target.value);
  }

  const onPwdChange = (e) => {
    setPwd(e.target.value);
  }

  const onReset = (e) => {
    setId('');
    setPwd('');
  }

  // 회원가입페이지 이동
  const onRegisterPageButtonClick = (e) => {
      e.preventDefault();
      navigate('/register');
  };

    // 로그인 버튼 클릭 이벤트
  const onSignInClick = async(e) => {
    e.preventDefault();
    const response = await axios.post(`https://${auth.serverIP}/login-action`, { id, pwd });
    if(response.data === 'failure'){
        alert('로그인 실패');
        idInput.current.focus(); // id input에 포커스 지정
        onReset(e);
    }else if(response.data === 'error'){
        alert('서버 오류');
        onReset(e);
    }else if(Object.keys(response.data).length !== 0){
        alert('로그인 성공');
        auth.login(response.data); // object 형태로 전송
        onReset(e);
        // 로그인 성공 시 메인 페이지 이동
        // navigate(`/board/list`);
    }
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
                        <Form.Group className="mb-3">
                          <Form.Label className="text-center">
                            아이디
                          </Form.Label>
                          <Form.Control 
                            id="userId"
                            type="text" 
                            placeholder="아이디 입력"
                            value={id}
                            onChange={onIdChange}
                            ref={idInput} />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>비밀번호</Form.Label>
                          <Form.Control 
                            id="userPwd"
                            type="password" 
                            placeholder="비밀번호 입력" 
                            value={pwd} 
                            onChange={onPwdChange}/>
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
                          <Button variant="primary" onClick={onSignInClick}>
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