import { connect } from "react-redux";
import TableData from "./TableData";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, { Component } from "react";

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  handleChange = (e, newValue) => {
    console.log(newValue);
    this.setState({ value: newValue });
  };
  render() {
    return (
      <div>
        <Paper square>
          <Tabs
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            value={this.state.value}
            centered
          >
            <Tab label="Front End Developer" />
            <Tab label="NODE JS Developer" />
            <Tab label="MEAN Stack Developer" />
            <Tab label="Full Stack Developer" />
          </Tabs>
        </Paper>
        {this.state.value == 0 && (
          <TableData
            users={this.props.users.filter(
              ele => ele.jobTitle == "Front-End Developer"
            )}
            type="Front End Developer"
          />
        )}
        {this.state.value == 1 && (
          <TableData
            users={this.props.users.filter(
              ele => ele.jobTitle == "Node.js Developer"
            )}
            type="Node.js Developer"
          />
        )}
        {this.state.value == 2 && (
          <TableData
            users={this.props.users.filter(
              ele => ele.jobTitle == "MEAN Stack Developer"
            )}
            type="MEAN Stack Developer"
          />
        )}
        {this.state.value == 3 && (
          <TableData
            users={this.props.users.filter(
              ele => ele.jobTitle == "FULL Stack Developer"
            )}
            type="FULL Stack Developer"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps)(MainScreen);
