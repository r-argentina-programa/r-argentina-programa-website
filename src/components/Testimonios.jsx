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
    marginBottom: theme.spacing(4),
  },
  testimonios: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
  },
  testimonio: {
    width: theme.spacing(50),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(40),
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.down(321)]: {
      width: theme.spacing(30),
    },
  },
  testimonioContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  testimonioNombre: {
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
  testimonioInfo: {
    marginBottom: theme.spacing(1),
  },
  testimonioPuesto: {
    fontWeight: 'bold',
  },
  openTestimony: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    width: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(2),
    },
  },
  openTestimonyTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 'bold',
  },
  openTestimonyLine: {
    textAlign: 'left',
    marginBottom: theme.spacing(2),
  },
  closeIcon: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
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
                  {testimonio.edad ? `${testimonio.edad} años - ` : ''}
                  {testimonio.localidad}
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
