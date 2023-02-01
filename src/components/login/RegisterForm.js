import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from 'axios'; // HTTP 비동기 통신 라이브러리
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styled/RegisterForm_style.css";
import { useAuth } from '../../authentiaction/auth';

// React BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterForm(){
  const auth = useAuth();
  const passwordInput = useRef();
  const navigate = useNavigate(); // 사용자 위치 파악

  const [user, setUser] = useState({
    userId : '',
    userPwd : '',
    userPwdCheck : '',
    userName : '',
    userAge : '',
    userSex : '',
    userBirthday : '',
  });

  const { userId, userPwd, userPwdCheck, userName, userAge, userSex, userBirthday } = user;

  const onInputChange = (e) => {
    console.log(e.target.value);
    const { id, value } = e.target;
    setUser({
      ...user,
      [id] : value,
    });
  };

  const onReset = (e) => {
    setUser({
      userId : '',
      userPwd : '',
      userPwdCheck : '',
      userName : '',
      userAge : '',
      userSex : '',
      userBirthday : '',
    });
  };

  const onSignUpClick = async(e) => {
    // 입력하지 않은 칸이 존재할 경우
    if(user.userId.length === 0 || user.userPwd.length === 0 || 
      user.userPwdCheck.length === 0 || user.userName === 0 ||
      user.userAge.length === 0 || user.userSex.length === 0 || user.userBirthday.length === 0){
      alert('입력하지 않은 칸이 존재합니다!');
      e.preventDefault(); // submit 중단
    }else{
      // 비밀번호 확인이 틀릴 경우
      if(user.userPwd !== user.userPwdCheck){
        alert('동일한 비밀번호가 아닙니다!');
        setUser({...user, userPwd: '', userPwdCheck: ''}); // user State 초기화
        passwordInput.current.focus(); // password input에 포커스 지정
        e.preventDefault();
      }else{
        e.preventDefault();
        const request = await axios.post(`https://${auth.serverIP}/signup-action`, {user});
        if(request.data === 'error'){
            alert('데이터를 저장하는 중 오류가 발생하였습니다.');
        }else if(request.data === 'success'){
            onReset();
            alert('회원가입 되었습니다!');
            navigate('/login');
        }else{
          alert('서버와 연결되어있지 않습니다.');
        }
      }
    }
  }

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
                          <Form.Label>비밀번호</Form.Label>
                          <Form.Control 
                            id="userPwd"
                            type="password" 
                            placeholder="비밀번호 입력" 
                            value={userPwd}
                            onChange={onInputChange}
                            ref={passwordInput}
                            />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>비밀번호 확인</Form.Label>
                          <Form.Control 
                            id="userPwdCheck"
                            type="password" 
                            placeholder="비밀번호 확인"
                            value={userPwdCheck}
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
                            onChange={onInputChange} />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>나이</Form.Label>
                          <Form.Control 
                            id="userAge"
                            type="text" 
                            placeholder="나이" 
                            value={userAge}
                            onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>성별</Form.Label>
                          <Form.Select onChange={onInputChange} id="userSex">
                            <option defaultValue={"남자"}>남자</option>
                            <option defaultValue={"여자"}>여자</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                        >
                          <Form.Label>생년월일</Form.Label>
                          <Form.Control 
                            id="userBirthday"
                            type="text"
                            placeholder="ex) 2023-01-01"
                            value={userBirthday}
                            onChange={onInputChange}
                             />
                        </Form.Group>
                        
                        <div className="d-grid">
                          <Button variant="primary" onClick={onSignUpClick}>
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