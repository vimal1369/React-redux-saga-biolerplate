import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./Actions/actions";
import { Button, ButtonToolbar, Alert, NavItem } from 'react-bootstrap';

class Home extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  person = (x, i) =>
    <div key={x.id.value}>
      <h1>
        {x.gender}
      </h1>
      <h1>
        {x.name.first}
      </h1>
      <h1>
        {x.name.last}
      </h1>
      <img src={x.picture.medium}  alt="img"/>
    </div>;

  render() {
    const { results = [] } = this.props.data;
    return results.length
      ? <h1>
          {results.map(this.person)}
            <ButtonToolbar>
                {/* Standard button */}
                <Button>Default</Button>

                {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                <Button bsStyle="primary">Primary</Button>

                {/* Indicates a successful or positive action */}
                <Button bsStyle="success">Success</Button>

                {/* Contextual button for informational alert messages */}
                <Button bsStyle="info">Info</Button>

                {/* Indicates caution should be taken with this action */}
                <Button bsStyle="warning">Warning</Button>

                {/* Indicates a dangerous or potentially negative action */}
                <Button bsStyle="danger">Danger</Button>
                <NavItem href="/hello" to="/hello">Home</NavItem>
            </ButtonToolbar>
            <Alert bsStyle="warning">
                <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
                good.
            </Alert>;
        </h1>
      : <h1>loading...</h1>;
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
