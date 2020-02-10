import React from 'react';
import {} from 'react-router';
import { withRouter } from "react-router-dom";
import {
  Input,
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Navigation extends React.Component {
//const Navigation = (props) => {

  getInitialState(){
    return {
      searchText: ''
    };
  }

  constructor(props) {
    super(props);
    this.state = {searchText: ''};
    //const [isOpen, setIsOpen] = useState(false);

    //const toggle = () => setIsOpen(!isOpen);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    this.setState({
      searchText: event.target.value
    },()=>{
      if(this.state.searchText.length >=3){
        console.log('this.context :: ',this.context,this.props);
        this.props.history.push({ //browserHistory.push should also work here
            pathname: '/search',
            state: {searchText: this.state.searchText}
          });
        // this.context.router.push({ //browserHistory.push should also work here
        //   pathname: '/search',
        //   state: {searchText: this.state.searchText}
        // });
        console.log('updated state  :::',this.state.searchText);
      }
    });
    console.log('eent :::',event,this.state.searchText);
    //event.preventDefault();
  } 

  render(){
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">newsnow</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <Collapse isOpen={isOpen} navbar> */}
        <Collapse isOpen={false} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              {/* <Form inline> */}
              {/* <Form inline onSubmit={this.handleSubmit}> */}
                <Input type="text" placeholder="Search" className="mr-sm-2" value={this.state.searchText} onChange={(evt) => this.handleSubmit(evt)} />
                {/* <Button type="submit" variant="outline-success" onClick={this.handleSubmit}>Search</Button> */}
              {/* </Form> */}
            </NavItem>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

// Navigation.contextTypes = { 
//   router: PropTypes.func.isRequired
// };

export default withRouter(Navigation);