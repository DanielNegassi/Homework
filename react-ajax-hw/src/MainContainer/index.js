import React, { Component } from 'react';
import News from '../News';

class MainContainer extends Component {
    constructor(){
        super();

        this.state = {
            news: []
        }
    }
    getNews = async () => {

        try {
            const news = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b44d6a80d5204b62b45651e9c9ec420c');
            const newsJson = await news.json();
            console.log(newsJson, ' this is news');
            return newsJson;

        } catch (err) {
            console.log(err, 'error in catch block');
            return err;
        }
    }
    componentDidMount() {
        this.getNews().then((data) => {
            console.log(data, ' this is data');
            this.setState({news: data.articles});
            console.log(this.state.news, ' this is state.news after setState')
        })
    }
    render() {
        console.log(this.state.news, ' this is state.news')
        return (
            <div>
                <News news={this.state.news} />
            </div>
        )
    }
};

export default MainContainer;
