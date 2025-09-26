import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import '../UserManage.scss';
import "./TableManageUser.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { deleteUserStart, fetchAllUserStart } from '../../../store/actions';
import * as ReactDOM from 'react-dom'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'
import "./doctorManage.scss"
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const mdParser = new MarkdownIt(/* Markdown-it options */);



class DoctorManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentHTML : "",
            contentMarkdown: "",
            selectedOption: "",
            description: ""
        }

    }
     handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html
        })
    }

    handSaveMarkdown = () => {
        console.log("check markdown: ", this.state)
    }

    handleOnchangeTextArea = (e) => {
   
        this.setState({
            description: e.target.value
        })
    }
    render() {

        return (
            <div className='manageDoctor-container'>
                <div className='manageDoctor-container__title'>Create Infomation Doctors</div>
                <div className='manageDoctor-container__moreInfo'>
                    <div className='moreInfo-select'>
                        <p>Chọn bác sĩ</p>
                       
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            className="moreInfo-select__input"
                        />
                    </div>
                    <div className='moreInfo-textArea'>
                          <p>Chọn bác sĩ</p>
                        <textarea 
                            rows="4" 
                            className='moreInfo-textArea__input'
                            onChange={(e) => this.handleOnchangeTextArea(e)}
                            value={this.state.description}
                        >
                            hello
                        </textarea>
                    </div>
                </div>
                <div className='manageDoctor-container__editor'>
                    <MdEditor
                        style={{ height: 450, borderRadius: 10 }}
                        renderHTML={(text) => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                    />
                </div>
                <div className='manageDoctor-container__btn'>
                    <button 
                      className='manageDoctor-container__btnSave'
                      onClick={() => this.handSaveMarkdown()}
                    >
                        Lưu thông tin 
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        isLoadingGender: state.admin.isLoadingGender,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManage);
