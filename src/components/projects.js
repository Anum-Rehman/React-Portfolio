import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled, { keyframes } from 'styled-components';
import { zoomIn, flipInX } from 'react-animations'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Projects() {
  const classes = useStyles();
  const ZoomIn = styled.div`animation:1s ${keyframes`${zoomIn}`} 1`;
  return (
    <ZoomIn>
      <h1 className="resume-heading" style={{ textAlign: 'center', color: "white" }}>Academic Projects</h1>
      <hr />
      <div className="row">
        <div className="col-sm-7 col-12">
          <Card className={classes.root}>
            <CardActionArea>
              <center>
              <img className={classes.media} src={require("../images/mobileApp.jpg")} />
              <img className={classes.media} src={require("../images/mobileApp1.jpg")} />
              {/* <img className={classes.media} src={require("../images/mobileApp2.jpg")} /> */}
              <img className={classes.media} src={require("../images/mobileApp3.jpg")} />
              </center>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  Mobile Application
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Mobile Application to order food online for normal users who want to buy home made food
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: -12 }}>
              <a href="https://www.linkedin.com/posts/anum-rehman-2635a5129_alhamdullilah-my-first-react-native-application-activity-6636348380027150336-4v52/" className="project-links" target="_blank">
                <Button size="small" className="project-link-button" startIcon={<RemoveRedEye />}>
                  View
        </Button>
              </a>
            </CardActions>
          </Card>
        </div>

        <div className="col-sm-5 col-12">
          <Card className={classes.root}>
            <CardActionArea>
              <img className={classes.media} src={require("../images/FZ_Web.PNG")} style={{ width: "100%" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  Food Zone Web
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A complete website for home chefs to post their dishes online and users will be able to order home made food through the same site
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: -12 }}>
              <a href="https://food-zone.000webhostapp.com/index.php" className="project-links" target="_blank">
                <Button size="small" className="project-link-button" startIcon={<RemoveRedEye />}>
                  View
        </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-sm-4 col-12">
          <Card className={classes.root}>
            <CardActionArea>
              <img className={classes.media} src={require("../images/Blood_Drive.PNG")} style={{ width: "100%" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  Blood Donation Site
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A basic website for blood donors. The site allows them to share their info & other users will be able to contact them
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: -12 }}>
              <a href="https://myblood-donation.firebaseapp.com/" className="project-links" target="_blank">
                <Button size="small" className="project-link-button" startIcon={<RemoveRedEye />}>
                  View
        </Button>
              </a>
            </CardActions>
          </Card>
        </div>

        <div className="col-sm-4 col-12">
          <Card className={classes.root}>
            <CardActionArea>
              <img className={classes.media} src={require("../images/Boutique.PNG")} style={{ width: "100%" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  Boutique Site
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Static website to show the Boutique items including jwellery, sandles, clothes and other boutique stuffs
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: -12 }}>
              <a href="https://www.dropbox.com/s/1tz2jkgxg5m50c8/Web%20Project.mp4?dl=0" className="project-links" target="_blank">
                <Button size="small" className="project-link-button" startIcon={<RemoveRedEye />}>
                  View
        </Button>
              </a>
            </CardActions>
          </Card>
        </div>

        <div className="col-sm-4 col-12">
          <Card className={classes.root}>
            <CardActionArea>
              <img className={classes.media} src={require("../images/Stock_Management.PNG")} style={{ width: "100%" }} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
                  Desktop Application
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Desktop Application for super marts to manage their vendors, stocks and employees and to prepare invoices as well
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: 'center', marginTop: -12 }}>
              <a href="https://www.dropbox.com/s/l0hrsl4201plzuv/SD%20Project.mp4?dl=0" className="project-links" target="_blank">
                <Button size="small" className="project-link-button" startIcon={<RemoveRedEye />}>
                  View
        </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    </ZoomIn>
  );
}
