import React, {useContext} from 'react';
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./homePage.scss";
import {ThemeContext} from '../store/ThemeContext'
import ThemeButton from "../components/ThemeButton";
import MainSmart from "../components/mainSmart";
import Header from "../components/Header";
import '../assets/styles/main.scss'
import Search from "../components/search";

const HomePage = () => {

    const { isDarkTheme } = useContext(ThemeContext)

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }

    return (

        <Container className={`container-test ${isDarkTheme ? 'darkTheme' : 'lightTheme'}`}>
            <ThemeButton/>
            <Search/>
            <Header/>
            <MainSmart
                path={"/toymovement"}
                title='A few words about movement...'
                myImg="/assets/images/bobby-car-349695_1280.jpg"
                infoText='Movement activities for children are essential in fostering healthy development. Gross motor activities and imaginative movements that can be done in the home or school are great for helping to develop muscles, bones and knowledge of the environment.'
                buttonText='Your movement toys'/>
            <MainSmart
                path={"/toyinteractive"}
                title='What about interactive toys?'
                myImg="/assets/images/baby-84552_1280.jpg"
                infoText='Interactive toys are toys that are designed to engage the child in play and learning through active participation. These toys often incorporate technology, such as sensors or buttons, that respond to the child’s actions, encouraging creativity and exploration. They can range from simple pull-string toys to more complex computer games and robotics kits. Interactive toys offer many benefits, including the development of problem-solving skills, hand-eye coordination, and cognitive abilities.'
                buttonText='Your interactive toys'/>
            <MainSmart
                path={"/toystructural"}
                title='Magic of structural toys'
                myImg="/assets/images/child-1864718_1920.jpg"
                infoText="One of the key benefits of construction toys is their ability to enhance fine motor skills in children. When kids engage in building blocks play, they are required to manipulate and grasp small objects, which helps to develop their hand-eye coordination and dexterity. By stacking blocks and connecting pieces together, children also improve their fine motor skills and hand muscles, which are crucial for activities such as writing, drawing, and tying shoelaces."
                buttonText='Your structural toys'/>
        </Container>

    );
};

export default HomePage;