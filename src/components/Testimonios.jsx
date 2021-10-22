import React from 'react';
import {
  Card,
  CardContent,
  CardActionArea,
  makeStyles,
  Typography,
  Modal,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import testimonios from '../data/testimonios';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  title: {
    marginBottom: 32,
  },
  testimonios: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  testimonio: {
    width: theme.spacing(50),
  },
  openTestimony: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(1, 2, 2),
    },
    '& > *': {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      width: theme.spacing(100),
      maxHeight: theme.spacing(75),
      [theme.breakpoints.down('md')]: {
        width: theme.spacing(90),
        maxHeight: theme.spacing(50),
      },
      [theme.breakpoints.down('sm')]: {
        width: theme.spacing(60),
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        maxHeight: '100%',
      },
    },
  },
  openTestimonyBody: {
    marginTop: theme.spacing(4),
    overflow: 'auto',
    flexGrow: 1,
  },
  openTestimonyLine: {
    textAlign: 'left',
    marginBottom: theme.spacing(2),
  },
  closeIcon: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    cursor: 'pointer',
  },
}));

export default function Testimonios(props) {
  const [openTestimony, setOpenTestimony] = React.useState(null);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Testimonios
      </Typography>
      <Typography variant="subtitle1" className={classes.title}>
        Para alentarte a seguir aprendiendo y siendo parte de esta comunidad, te
        acercamos los testimonios de varios usuarios que consiguieron trabajo
        (en parte o completamente) gracias a este curso.
      </Typography>
      <div className={classes.testimonios}>
        {testimonios.map((testimonio, i) => (
          <Card key={i} className={classes.testimonio}>
            <CardActionArea onClick={() => setOpenTestimony(testimonio)}>
              <CardContent>
                <Typography variant="h5">{testimonio.nombre}</Typography>
                <Typography variant="subtitle1">
                  {testimonio.edad} años - {testimonio.localidad}
                </Typography>
                <Typography variant="subtitle2">{testimonio.puesto}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <Modal
        open={openTestimony !== null}
        onClose={() => setOpenTestimony(null)}
      >
        {openTestimony && (
          <Card className={classes.openTestimony}>
            <CardContent>
              <Typography variant="h4">{openTestimony.nombre}</Typography>
              <CloseIcon
                className={classes.closeIcon}
                onClick={() => setOpenTestimony(null)}
              />
              <div className={classes.openTestimonyBody}>
                {openTestimony.testimonio.split('\n').map((line, i) => (
                  <Typography
                    variant="body1"
                    className={classes.openTestimonyLine}
                  >
                    <span dangerouslySetInnerHTML={{ __html: line }}></span>
                  </Typography>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </Modal>
    </div>
  );
}
