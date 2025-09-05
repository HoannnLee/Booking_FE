import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { languages } from "../../../utils"
import "./UserRedux.scss"


class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: []
        }
    }

    async componentDidMount() {
        try {
            const res = await getAllCodeService('gender');
            if (res && res.errCode === 0) {
                this.setState({
                    genderArr: res.data
                })
            }
        } catch (error) {

        }
    }

    render() {
        const genders = this.state.genderArr;
        const language = this.props.language;
        return (
            <div className='user-reduxPage'>
                <div className="text-center title">Manage Users  with redux</div>

                <div className='mt-4 user-redux-container'>
                    <div className='container user-redux-form'>
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4"><FormattedMessage id="user-manage.email" /></label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4"><FormattedMessage id="user-manage.password" /></label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4"><FormattedMessage id="user-manage.firstName" /></label>
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="firstName" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4"><FormattedMessage id="user-manage.lastName" /></label>
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="lastName" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress"><FormattedMessage id="user-manage.address" /></label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className='form-row'>
                                <div class="form-group col-md-4">
                                    <label for="inputAddress2"><FormattedMessage id="user-manage.phoneNumber" /></label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="+84339902379" />
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState"><FormattedMessage id="user-manage.gender" /></label>
                                    <select id="inputState" class="form-control">
                                        {genders && genders.length > 0 && genders.map((item, index) => {

                                            return (
                                                <option key={index} > {language === languages.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })}

                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="inputState"><FormattedMessage id="user-manage.position" /></label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputState"><FormattedMessage id="user-manage.role" /></label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="inputZip"><FormattedMessage id="user-manage.image" /></label>
                                    <input type="text" class="form-control" id="inputZip" />
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </form>

                    </div>
                </div >
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
