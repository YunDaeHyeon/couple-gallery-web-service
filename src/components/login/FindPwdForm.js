import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useState,  } from 'react';
import "../../styled/FindPwdForm_style.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authentiaction/auth';
import axios from "axios";

// React BootStrap import
import 'bootstrap/dist/css/bootstrap.min.css';

function FindPwdForm(){
  const auth = useAuth();
  const navigate = useNavigate();
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
  };

  const onReset = (e) => {
    setFindUser({
      userId : '',
      userName : '',
      userBirthday : '',
    });
  }

  // 비밀번호 찾기 버튼 클릭 시
  const onPwdFindButtonClick = async(e) => {
    // 입력하지 않은 칸이 존재하면
    if(findUser.userId.length === 0 || findUser.userName.length === 0 || findUser.userBirthday.length === 0){
      alert('입력하지 않은 칸이 존재합니다!');
      e.preventDefault();
    }else{
      e.preventDefault();
      const request = await axios.post(`https://${auth.serverIP}/findpwd-action`, {findUser})
      if(request.data === 'error'){
        alert('에러 발생');
      }else if(request.data.length !== 0){
        if(request.data === 'fail'){
          alert('일치하는 사용자가 존재하지 않습니다.');
        }else{
          onReset();
          alert(request.data);
        }
      }else{
        alert('서버와의 연결에 실패하였습니다.');
      }
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
              <h2 className="fw-bold mb-2 text-uppercase ">비밀번호 찾기</h2>
              <p className="mb-5">비밀번호를 잊으셨나요?</p>
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
                    <Button variant="primary" onClick={onPwdFindButtonClick}>
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