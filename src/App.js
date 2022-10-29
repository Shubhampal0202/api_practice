import React from 'react';
import axios from 'axios';
import Header from "./Components/Header"
import UserList from "./Components/UserList"
export default class App extends React.Component {
  state = {
    users: [],
    page: 0,
    isLoading: false,
    errorMsg: ""
  }
  componentDidMount() {

    console.log("component did mount");
    this.loadUsers();

  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
    if (prevState.page !== this.state.page) {
      this.loadUsers();
    }
  }
  loadUsers = () => {
    const { page } = this.state;
    this.setState({
      isLoading: true
    })
    axios.get(`https://randomuser.me/api/?page=${page}&results=10`)
      .then((responce) => {
        // console.log(responce.data);
        this.setState({
          users: responce.data.results
        })
      }).catch((error) => {
        this.setState({
          errorMsg: 'Error while loading data. Try again later.'
        })
      }).finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }
  loadMore = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1
      }

    })
  }
  render() {
    const { users, isLoading, errorMsg } = this.state;
    console.log("Users ", users)
    return (
      <>
        <div className="main_section">
          <Header></Header>
          {/* {isLoading && <h2 className='loading'>Loading...</h2>} */}
          {errorMsg && <h2>{errorMsg}</h2>}
          {<UserList users={users}></UserList>}
          <div className='load-more'>
            <button onClick={this.loadMore} className="btn">{isLoading ? 'Loading...' : 'LoadMore'}</button>
          </div>
        </div>
      </>
    );
  }

}


























