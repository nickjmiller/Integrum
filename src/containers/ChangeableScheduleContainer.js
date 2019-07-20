import { connect } from "react-redux";
import ScheduleComponent from "../components/ScheduleComponent";

const mapStateToProps = state => ({
    schedule: state.schedule,
});

export default connect(
    mapStateToProps,
    null
)(ScheduleComponent);