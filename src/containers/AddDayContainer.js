import { connect } from "react-redux";
import AddDay from "../components/AddDay";
import { addDay } from "../actions";


const mapStateToProps = state => ({
    index: state.schedule.length,
});

const mapDispatchToProps = dispatch => ({
    addDay: (name) => dispatch(addDay(name)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddDay);