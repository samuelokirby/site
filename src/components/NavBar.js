import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import FadeTypography from './FadeTypography';
import { Link } from 'react-router-dom';
import {useSpring, config, animated} from 'react-spring';
import MenuIcon from '../icons/MenuIcon.svg';




const useStyles = makeStyles((theme) => ({
  button: {
    '&:hover': {
        backgroundColor: theme.palette.primary.secondary,
    },
    height: 40,
    marginRight: 5,
    marginLeft: 5,
    right: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    fontSize: 16,
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    float: 'right',
    display: 'block',
  },
  link: {
    fontSize: 16,
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
    },
  },
}));



export default function ButtonAppBar() {

    const [showA, setShowA] = React.useState(false);


    const fadeStyles = useSpring({
        config: { ...config.stiff },
        from: { opacity: 0 },
        to: {
          opacity: showA ? 1 : 0
        }
      });

      //////

    const [toggle, setToggle] = React.useState(true);


    const classes = useStyles();

    return (
    <div className={classes.root}>
    <AppBar position="static" elevation={1}>
        <Toolbar color="primary">
            <Typography variant="h5" className={classes.title}>
                <Link to="/" style={{color: 'black', textDecoration: 'none', fontSize: 24, fontWeight: 500}}>
                    Sam Kirby
                </Link>
            </Typography>
            
            <animated.span style={fadeStyles}>
                <FadeTypography toggled={toggle} className={classes.menuItem}>
                    <Button component={Link} to="/experience" className={classes.button}>
                        Experience
                    </Button>
                </FadeTypography>
            </animated.span>

            <animated.span style={fadeStyles}>
                <FadeTypography toggled={toggle} className={classes.menuItem}>
                    <Button component={Link} to="/projects" className={classes.button}>
                        Projects
                    </Button>
                </FadeTypography>
            </animated.span>

            <animated.span style={fadeStyles}>
                <FadeTypography toggled={toggle} className={classes.menuItem}>
                    <Button component={Link} to="/blog" className={classes.button}>
                        Blog
                    </Button>
                </FadeTypography>
            </animated.span>

            <animated.span style={fadeStyles}>
                <FadeTypography toggled={toggle} className={classes.menuItem}>
                    <Button component={Link} to="/contact" className={classes.button}>
                        Contact
                    </Button>
                </FadeTypography>
            </animated.span>



        <IconButton onClick={() => setShowA(val => !val)} edge="start" color="inherit" aria-label="menu">
          <img src={MenuIcon}/>
        </IconButton>
        </Toolbar>
    </AppBar>
    </div>
  );
}