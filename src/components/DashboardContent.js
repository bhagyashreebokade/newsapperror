import React, { PureComponent } from 'react';
import {
  UncontrolledCollapse, Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import SimpleFullPageDialog from './SimpleFullPageDialog';
import Modal from './Modal';
// import {
//   Button,
//   DialogContainer,
//   Divider,
//   TextField,
//   Toolbar,
// } from 'react-md';

class DashboardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      isOpen: false,
      visible: false, pageX: null, pageY: null
    };
  }

  state = { visible: false, pageX: null, pageY: null };
  show = (e) => {
    // provide a pageX/pageY to the dialog when making visible to make the
    // dialog "appear" from that x/y coordinate
    let { pageX, pageY } = e;
    if (e.changedTouches) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    this.setState({ visible: true, pageX, pageY });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=45b42b4a800c4b6cb7da2ce682ad6866")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result :: ', result);
          this.setState({
            isLoaded: true,
            items: result.articles,
            isOpen: false
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            isOpen: false,
            error
          });
        }
      )
  }


  render() {
    console.log('render :: ', this.state);
    // <li key={item.name}>
    //           {item.name} {item.price}
    //         </li>
    const { error, isLoaded, items, isOpen, visible, pageX, pageY } = this.state;
    console.log('isOpen :: ', isOpen);
    if (error) {
      return (<div>
        Error: {error.message}
      </div>);
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map((item, idx) => (
            // <li key={idx}>.card-img-top {
            <Card key={idx} className="row">
              <CardImg top style={{ width: '20%' }} src={item.urlToImage} alt={item.title} />
              {/* <CardImg top style={{ width: '20%' }} src={item.urlToImage} alt={item.title} /> */}
              <CardBody>
                <b><CardTitle>{item.title}</CardTitle></b>
                <CardText><small className="text-muted">{item.description}</small></CardText>
                <Button color="primary" id={"toggler"+idx} style={{ marginBottom: '1rem' }}>
                  Read full article
                </Button>
                <UncontrolledCollapse toggler={"#toggler"+idx}>
                  <CardText>{item.content}</CardText>
                </UncontrolledCollapse>
                {/* <button onClick={this.toggleModal}>Read Full Story - {this.state.isOpen} </button>
                  <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    `Here's some content for the modal`
                  </Modal> */}
                {/* <Button raised onClick={this.show} aria-controls="simple-full-page-dialog">
                    Open the Dialog
                  </Button> */}
                {/* <DialogContainer
            id="simple-full-page-dialog"
            visible={visible}
            pageX={pageX}
            pageY={pageY}
            fullPage
            onHide={this.hide}
            aria-labelledby="simple-full-page-dialog-title"
          >
            <Toolbar
              fixed
              colored
              title="New Event"
              titleId="simple-full-page-dialog-title"
              nav={<Button icon onClick={this.hide}>close</Button>}
              actions={<Button flat onClick={this.hide}>Save</Button>}
            />
            <section className="md-toolbar-relative">
              <TextField id="event-email" placeholder="Email" block paddedBlock />
              <Divider />
              <TextField id="event-name" placeholder="Event name" block paddedBlock />
              <Divider />
              <TextField id="event-desc" placeholder="Description" block paddedBlock rows={4} />
            </section>
          </DialogContainer> */}
              </CardBody>
            </Card>
            // </li>
          ))}
        </div>
      );
    }
  }
}

export default DashboardContent;