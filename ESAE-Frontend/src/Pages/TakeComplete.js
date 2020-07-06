import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Exam.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

class ExamComplete extends Component {
    constructor(props) {
        super(props);
        window.CompleteQuestions=[];
        window.CompleteAnswers=[];
      }
    handleSubmit()
    {
        window.CompleteAnswers=[];
        for(var i=0;i<window.CompleteCount;i++)
        {
            
            if(document.getElementById("AnswerComplete" + (i+1))!=null)
            {
                window.CompleteAnswers.push(document.getElementById("AnswerComplete" + (i+1)).value);
            }

        }
        
        
    }
    render() {
        var ExamComplete = window.ExamComplete;
        window.CompleteQuestions=window.ExamComplete;
        var Examname=this.props.passedname
        var CompleteHead = "";
        var Complete = "";
        var i=0
        if (ExamComplete.length != 0) {
            CompleteHead = <div><Form.Label  ><b>Complete the following:</b></Form.Label>  <Button style={{width:'21%',margin: '10px 10px 10px 10px'}} onClick={this.handleSubmit} size="sm" variant="primary" >Submit Complete</ Button>
            <br /></div>;
            Complete = ExamComplete.map((Question, index) => {
               
                if (index%2==0)
                {
                    i+=1;
                    var answerid = "AnswerComplete" + i;
                    window.CompleteCount=i;
                    return (
                        <div>
                            <Form.Label  > {i})&nbsp; </Form.Label> 
                            <Form.Label>  {ExamComplete[index]}   </Form.Label>
                            <input type="text" id={answerid} placeholder="Enter Answer Here"  style={{margin:"6px"}}/>
                            <Form.Label> {ExamComplete[index+1]} </Form.Label>
                           
                        </div>
                    )
                }
            }
            );
        }

        return (
            <div>
                {CompleteHead}
                {Complete}
                          
            </div>
        )
    }
}

export default ExamComplete;