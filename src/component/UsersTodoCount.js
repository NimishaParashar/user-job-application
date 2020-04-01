import React from "react";
import axios from "axios";

class UsersToDoCount extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      todos: []
    };
  }
  componentDidMount() {
    function api1() {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then(response => {
            resolve(response.data);
          })
          .catch(err => {
            reject("rejected");
          });
      });
    }
    function api2() {
      return new Promise((resolve, reject) => {
        axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then(response => {
            resolve(response.data);
          })
          .catch(err => {
            reject("rejected");
          });
      });
    }

    Promise.all([api1(), api2()])
      .then(values => {
        const [api1Result, api2Result] = values;
        this.setState({ users: api1Result, todos: api2Result });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        Users Todo's Count- {this.state.users.length}
        {this.state.todos.length}
        {this.state.users.map(user => {
          return (
            <li>
              {user.name}
              <button>
                {
                  this.state.todos.filter(todo => {
                    return todo.userId == user.id;
                  }).length
                }
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}

export default UsersToDoCount;
