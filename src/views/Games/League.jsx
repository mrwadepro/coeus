import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

// core components
import Button from "components/CustomButtons/Button.jsx";

import pricingPageStyle from "assets/jss/material-dashboard-pro-react/views/pricingPageStyle.jsx";
import chartsStyle from "assets/jss/material-dashboard-pro-react/views/chartsStyle.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";

// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { leagueData } from "variables/leagueGameData";
//Table
import MaterialTable from "components/Table/MaterialTable";
import axios from "axios";
import {
  roundedLineChart,
  straightLinesChart,
  simpleBarChart
} from "variables/charts.jsx";
const style = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

function League({ ...props }) {
  //State Declaration
  const [matchData, setData] = useState([]);

  //Set the state when component mounts
  useEffect(() => {
    //Set the state here
    //Uncomment Axios Route here Figgy
    // axios.get("/api/data").then(data=>{
    //   setData(data.data.matches)
    // }).catch(err=>{console.log(err)})
    setData(leagueData);
  }, []);

  const { classes } = props;
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>FigTheBeast</h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h3 className={classes.cardCategory}>Solo/Duo</h3>
              <Button round color="white">
                Rank Icon
              </Button>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                Gold III
              </h3>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h3 className={classes.cardCategory}>Honor</h3>
              <Button round color="white">
                Mastery Icon
              </Button>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                Level 4
              </h3>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card pricing plain>
            <CardBody pricing plain>
              <h3 className={classes.cardCategory}>Mastery Score</h3>
              <Button round color="white">
                Champion Icon
              </Button>
              <h3
                className={`${classes.cardTitleWhite} ${classes.marginTop30}`}
              >
                215
              </h3>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="rose">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={roundedLineChart.data}
                type="Line"
                options={roundedLineChart.options}
                listener={roundedLineChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Rounded Line Chart</h4>
              <p className={classes.cardCategory}>Line Chart</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={straightLinesChart.data}
                type="Line"
                options={straightLinesChart.options}
                listener={straightLinesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Straight Lines Chart</h4>
              <p className={classes.cardCategory}>Line Chart with Points</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart-white-colors"
                data={simpleBarChart.data}
                type="Bar"
                options={simpleBarChart.options}
                responsiveOptions={simpleBarChart.responsiveOptions}
                listener={simpleBarChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Simple Bar Chart</h4>
              <p className={classes.cardCategory}>Bar Chart</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                FigTheBeast Match History
              </h4>
            </CardHeader>
            <CardBody>
              <MaterialTable
                data={matchData}
                columDef={[
                  { title: "Lane", field: "lane" },
                  { title: "Role", field: "role" },
                  { title: "Champion", field: "champion", type: "numeric" },
                  { title: "Season", field: "season" },
                  { title: "Game Id", field: "gameId", type: "numeric" },
                  { title: "Platform", field: "platformId" },
                  { title: "Queue", field: "queue", type: "numeric" }
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Ranked Champion Stats
                <small> - 2019 Season</small>
              </h4>
            </CardHeader>
            <CardBody plain></CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

League.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style, pricingPageStyle, chartsStyle)(League);
