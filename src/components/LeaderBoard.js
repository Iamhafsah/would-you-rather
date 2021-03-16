import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link } from "react-router-dom";
import Nav from './Nav';

export class LeaderBoard extends Component {

    render() {
        let {users, authedUser} = this.props;

        return (
            <>
            {authedUser ? (
                <>
                <Nav/>
                <table className="leaderboard-container">
                    <tbody>
                    <tr className="leaderboard-headings">
                        <th>Username</th>
                        <th>Avatar</th>
                        <th>Questions asked</th>
                        <th>Questions answered</th>
                    </tr>
    
                    <>
                        {users.map((user, index)=>(
                            <tr key={index} className="leaderboard-table">
                                <td className="user-name">{user.name}</td>
                                <td><img src={user.avatarURL} alt="user avatar" className="leaderboard-avatar"/></td>
                                <td>{user.questions.length}</td>
                                <td>{Object.keys(user.answers).length}</td>
                                
                            </tr>
                        ))}
                    </>
                    </tbody>
                </table>
                </>
            ): (
                <div>You cannot access this page unless you <Link to="/">Choose a player</Link></div>
            )
             }
            </>
        )
    }
}

function mapStateToProps({users, authedUser}){
    let newUserObject = Object.assign({}, users);

    Object.values(users).map((item) =>(
        newUserObject[item.id]["score"] = Object.keys(item.answers).length + item.questions.length
    ))

    return{
        users: Object.values(newUserObject).sort((user1, user2) => {
            if (user1.score < user2.score) {
              return 1;
            } else if (user1.score > user2.score) {
              return -1;
            } else {
              return 0;
            }
          }),
          authedUser
    }
}

export default connect(mapStateToProps) (LeaderBoard)
