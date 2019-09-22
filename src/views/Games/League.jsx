
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
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
            <h4 className={classes.cardIconTitle}>FigTheBeast Match History</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Win/Loss","Champion Played", "Game Type", "Kill/Death/Assist", "Date", "Game Length"]}
              tableData={[
                ["Victory", "Rammus", "Normal (Draft Pick)", "8/8/20", "08/29/2019", "38:21"],
                ["Defeat", "Thresh", "Normal (Draft Pick)", "2/3/9", "08/24/2019", "23:14"],
                ["Defeat", "Pyke", "Normal (Draft Pick)", "2/7/1", "08/24/2019", "23:55"],
                ["Defeat", "Thresh", "Normal (Draft Pick)", "1/3/5", "08/24/2019", "20:23"],
                ["Defeat", "Vel'Koz", "Normal (Draft Pick)", "5/6/2", "08/24/2019", "20:25"],
                ["Defeat", "Thresh", "Normal (Draft Pick)", "7/7/14", "08/19/2019", "34:45"]
              ]}
              colorsColls={["primary"]}
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
          <CardBody plain>
            <Table
              hover
              tableHead={["Champion", "Combat", "Income", "Map Control", "KDA Ratio", "Kill Participation", "Damage Per Death", "Damage Per Gold", "CS Per Minute", "Objective Control Ratio", "Vision Score Per Hour"]}
              tableData={[
                ["Thresh", "A-", "B+", "A-", "3.39", "56.9%", "1,738", "0.92", "0.4", "48.2%", "105.0"],
                ["Vel'Koz", "A+", "B+", "A-", "2.50", "50.9%", "4,491", "2.56", "1.2", "41.1%", "55.7"],
                ["Nautilus", "B+", "A-", "B", "2.37", "56.4%", "2,012", "1.55", "1.8", "43.3%", "76.5"],
                ["Yuumi", "A", "A-", "A-", "6.32", "63.6%", "3,355", "1.33", "0.3", "66.7%", "64.5"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    </div>
  );
}

League.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style,pricingPageStyle,chartsStyle)(League);
