import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";

import ExerciseModal from "../components/ExerciseModal";
import FilterableExerciseList from "./FilterableExerciseList";
import SearchBar from "./SearchBar";

import { hideModal, showModal, addExercise } from "../actions";

const customStyles = {
    content : {
        top                   : "50%",
        left                  : "50%",
        right                 : "auto",
        bottom                : "auto",
        marginRight           : "-50%",
        transform             : "translate(-50%, -50%)",
    }
};
  

const mapStateToProps = state => ({
    ...state.modal,
});

const mapDispatchToProps = dispatch => ({ 
    hideModal: () => dispatch(hideModal()),
    showModal: (modalProps, modalType) => {
        dispatch(showModal({ modalProps, modalType }));
    },
    addExercise: exercise => {
        dispatch(addExercise(exercise));
        dispatch(hideModal());
    },
});

class ModalContainer extends React.Component {
    mapModalElement(modalType) {
        switch(modalType) {
        case "ExerciseModal":
            return <ExerciseModal exercise={this.exercise} addExercise={this.props.addExercise}/>;
        case "ExerciseList":
            return (
                <div className="exercise-list">
                    <SearchBar />
                    <FilterableExerciseList />
                </div>);
        default:
            this.closeModal();
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.closeModal = this.closeModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({
                modalIsOpen: nextProps.modalProps.open,
            });
            this.exercise = nextProps.modalProps.exercise;
            this.modalElement = this.mapModalElement(nextProps.modalType);
        }
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Add exercise"
                    ariaHideApp={false}
                    style={customStyles}
                >{this.modalElement}
                </ReactModal>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
