import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
    ticket: {
        color: 'red',
        border: '1px solid black'
    }
})

function Ticket(props){
    const classes = styles();
    return(
        <div className={classes.ticket}>
            <h3>{props.location} - {props.names}</h3>
            <p><em>{props.issue}</em></p>
            <hr/>
        </div>
    );
}

Ticket.propTypes = {
    names: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    issue: PropTypes.string
};

export default Ticket;