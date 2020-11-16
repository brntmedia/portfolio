import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';

import PC from "../components/assets/images/PC.jpg";
import github from "../components/assets/images/profile.jpg";
import CV from "../components/assets/images/CV.jpg";
import Card from "../components/Card"

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'brntmedia',
                    subTitle: 'Your next gaming PC',
                    imgSrc: PC,
                    link: 'https://www.facebook.com/marketplace/profile/100002003184924/?ref=share_attachment',
                    selected: false
                }, 
                {
                    id:1,
                    title: 'Tyler Burns',
                    subTitle: 'Github',
                    imgSrc: github,
                    link: 'https://github.com/brntmedia',
                    selected: false
                }, 
                {
                    id:2,
                    title: 'CV',
                    subTitle: 'Academic and Professional History',
                    imgSrc: CV,
                    link: 'https://github.com/brntmedia/HH',
                    selected: false
                }, 
            ]
        }
    }


    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected=false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;


