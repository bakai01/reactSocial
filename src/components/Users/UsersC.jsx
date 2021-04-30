import React from "react";
import * as axios from "axios";

import style from "./Users.module.css";

import avatarPhoto from "../../assets/images/defaultAvatar.jpg";

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            })
            .catch(response => {
                console.log(response);
                console.log("error when requesting to the server");
            });
    }

    onClickPage = pageNumber => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
                this.props.setCurrentPage(pageNumber);
            })
            .catch(() => {
                console.log("error when changing the page");
            });
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        const pages = [];
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={style.navigation__btn}>
                    {
                        pages.map(page => <span
                            key={page}
                            className={this.props.currentPage === page ? style.selected : ""}
                            onClick={() => this.onClickPage(page)}
                        >{page}</span>)
                    }
                </div>
                {
                    this.props.usersPage.map(item => {
                        return (
                            <div className={style.wrapper} key={item.id}>
                                <div className={style.container}>
                                    <div className={style.img__container}>
                                        <img src={item.photos.large != null ? item.photos.large : avatarPhoto} alt="avatar of user" />
                                    </div>

                                    <div className={style.content}>
                                        <div className={style.head}>
                                            <p>{item.name}</p>
                                            <span>{item.status}</span>
                                        </div>

                                        <div className={style.data}>
                                            <div className={style.inner__data}>
                                                <p>{"item.location.country"}</p>
                                                <span>{"item.location.city"}</span>
                                            </div>
                                        </div>

                                    </div>
                                    {
                                        item.followed
                                            ? <div className={style.floating__icon} onClick={() => { this.props.unfollow(item.id) }} >
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </div>

                                            : <div className={style.btn} onClick={() => { this.props.follow(item.id) }} >follow</div>
                                    }
                                </div>
                            </div>

                        );
                    })
                }
            </div>
        );
    }
}

export default Users;