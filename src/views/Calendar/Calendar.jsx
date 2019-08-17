/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// react component used to create a calendar with events on it
import { Calendar } from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import buttonStyle from "assets/jss/material-dashboard-pro-react/components/buttonStyle.jsx";

import { events } from "variables/general.jsx";

// const localizer = Calendar.momentLocalizer(moment);

class CalendarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      alert: null
    };
    this.hideAlert = this.hideAlert.bind(this);
  }
  selectedEvent(event) {
    alert(event.title);
  }
  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Input something"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          cancelBtnCssClass={
            this.props.classes.button + " " + this.props.classes.danger
          }
        />
      )
    });
  }
  addNewEvent(e, slotInfo) {
    var newEvents = this.state.events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end
    });
    this.setState({
      alert: null,
      events: newEvents
    });
  }
  hideAlert() {
    this.setState({
      alert: null
    });
  }
  eventColors(event) {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor
    };
  }
  render() {
    return (
      <div>
        <Heading
          textAlign="center"
          title="React Big Calendar"
          category={
            <span>
              A beautiful react component made by{" "}
              <a
                href="https://github.com/intljusticemission?ref=creativetim"
                target="_blank"
              >
                International Justice Mission
              </a>
              . Please checkout their{" "}
              <a
                href="https://github.com/intljusticemission/react-big-calendar?ref=creativetim"
                target="_blank"
              >
                full documentation.
              </a>
            </span>
          }
        />
        {this.state.alert}
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card>
              <CardBody calendar>
                <Calendar
                  selectable
                  localizer={localizer}
                  events={this.state.events}
                  defaultView="month"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  onSelectEvent={event => this.selectedEvent(event)}
                  onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                  eventPropGetter={this.eventColors}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

CalendarContainer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(buttonStyle)(CalendarContainer);
