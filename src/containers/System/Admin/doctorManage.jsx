import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import '../UserManage.scss';
import "./TableManageUser.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { deleteUserStart, fetchAllDoctorStart, fetchAllUserStart, saveDetailInfoDoctorStart } from '../../../store/actions';
import * as ReactDOM from 'react-dom'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css'
import "./doctorManage.scss"
import Select from 'react-select';
import { languages } from '../../../utils';

const mdParser = new MarkdownIt(/* Markdown-it options */);


class DoctorManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentHTML : "",
            contentMarkdown: "",
            selectedOption: "",
            description: "",
            listDoctors: []
        }

    }

  
    async componentDidMount() {
        this.props.getAllDoctor();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.listDoctorsRedux !== this.props.listDoctorsRedux){
            const dataSelect =  this.buildInputData(this.props.listDoctorsRedux)
            this.setState({
                listDoctors :  dataSelect
            })
        }
        if(prevProps.language !== this.props.language){
            const dataSelect =  this.buildInputData(this.props.listDoctorsRedux)
            this.setState({
                listDoctors :  dataSelect
            })
        }
    }

      buildInputData = (inputData) => {
        let result = [];
        let { language } = this.props;
     
        if(inputData && inputData.length > 0 ){
            inputData.map((item, index) => {
                let object = {};
                const valueVi = `${item.firstName} ${item.lastName}`;
                const valueEn = `${item.lastName} ${item.firstName}`;
            
                object.label = language === languages.VI ? valueVi : valueEn;
                object.value = item.id;

                result.push(object)
            })
        }

        return result;
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
       this.props.saveInfoDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,
       })
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
                            options={this.state.listDoctors}
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
        listDoctorsRedux: state.admin.allDoctor,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllDoctor : () => dispatch(fetchAllDoctorStart()),
        saveInfoDoctor: (data) => dispatch(saveDetailInfoDoctorStart(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorManage);
