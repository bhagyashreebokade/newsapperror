import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            error: null,
            isLoaded: false,
            items: []
        };
    }

    static getDerivedStateFromProps(props, state){
        console.log('props ::getDerivedStateFromProps:: ',props);
        console.log('state ::getDerivedStateFromProps:: ',state);
        return {searchText: props.location.state ? props.location.state.searchText : ''}
    }

    fetchData(searchText){
        fetch("https://newsapi.org/v2/everything?language=en&apiKey=45b42b4a800c4b6cb7da2ce682ad6866&pageSize=100&qInTitle=+"+(searchText ? searchText : ''))
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result :: ', result);
                    if(result.status === 'error'){
                        this.setState({
                            isLoaded: true,
                            error: {message:'Could not fetch data. Please try again.'},
                            items: []
                        });    
                    }else{
                        this.setState({
                            isLoaded: true,
                            items: result.articles,
                            searchText: (this.props.location.state ? this.props.location.state.searchText : '')
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                        items: []
                    });
                });
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if(this.props.location.state && prevProps.location.state){
        if (this.props.location.state.searchText !== prevProps.location.state.searchText) {
            console.log('prevProps ::: ',prevProps);
            this.fetchData(this.props.location.state.searchText);
        }
    }
    }

    componentDidMount() {
        console.log('state ::: ', this.state);
        console.log('props ::: ', this.props);
        fetch("https://newsapi.org/v2/everything?language=en&apiKey=45b42b4a800c4b6cb7da2ce682ad6866&pageSize=100&qInTitle=+"+(this.props.location.state ? this.props.location.state.searchText : ''))
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result :: ', result);
                    if(result.status === 'error'){
                        this.setState({
                            isLoaded: true,
                            error: {message:'Could not fetch data. Please try again.'},
                            items: []
                        });    
                    }else{
                        this.setState({
                            isLoaded: true,
                            items: result.articles,
                            searchText: (this.props.location.state ? this.props.location.state.searchText : '')
                        });
                    }
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                        items: []
                    });
                });
    }

    render() {
        console.log('in search render::::');
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    Search by date: 
                    {items.map((item, idx) => (
                        // <li key={idx}>
                        <Card key={idx} style={{ display: 'inline-block' }} className="col-sm-3">
                            <CardImg top src={item.urlToImage} alt={item.title} />
                            <CardBody>
                                <b><CardTitle>{item.title}</CardTitle></b>
                                <CardText>{item.description}</CardText>
                                <Button>Read Full Story</Button>
                            </CardBody>
                        </Card>
                        // </li>
                    ))}
                </div>
            );
        }
    }
};

export default Search;