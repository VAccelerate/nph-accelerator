import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Container,
  CardTitle,
  CardBody
} from 'reactstrap'
import { Link } from 'react-router'



class EarnMorePoints extends Component {

    constructor(props) {
     super(props);
 }

    render () {

        const section = this.props.section

        function renderSubheader(subheader){
            return (
                <div key={subheader.name}>
                <a key={subheader.name} href={subheader.url}>{subheader.descText}</a><br/>
                </div>
            )
        }
        function shuffleArray(object){

          let newObject = object.challenges.filter(function(category){
            return category.isCompleted === false;
          });
          let i = newObject.length - 1;
          for(; i > -1; i--) {
            const j = Math.floor(Math.random()*(i+1));
            const temp = newObject[i];
            newObject[i] = newObject[j];
            newObject[j] = temp;
          }

          if(newObject.length > 4){
            newObject = newObject.slice(0,4)
          }else if(newObject.length == 0){
            return [{name:"nothing", descText:"You've completed everything for now!", url:null, isCompleted:false}];
          }
          return newObject;
        }


        return(
            <Container>
                <Card>
                    <CardTitle>Earn more points</CardTitle>
                    <CardBody>
                        {shuffleArray(section).map(renderSubheader)}
                    </CardBody>

                </Card>
            </Container>
        )
    }


}
export default connect(state => state)(EarnMorePoints)
