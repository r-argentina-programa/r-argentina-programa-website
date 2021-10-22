import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import slackData from '../data/slack.json';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  paragraph: {
    marginBottom: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function FAQ() {
  const classes = useStyles();
  const slackLink = slackData.slack.link;

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Este es el programa del gobierno argentino?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            No, esta es una comunidad independiente y abierta iniciada en reddit
            en el año 2019. El fundador fue Fabricio Sodano, que creó el slack y
            la mayoría de los videos en el canal (particularmente, todo el curso
            principal de javascript).
          </Typography>
          <Typography className={classes.paragraph}>
            El nombre de esta comunidad es r/argentina programa en relación al
            reddit r/argentina de donde surgió el proyecto, posteriormente el
            gobierno sacó una capacitación llamada "Argentina Programa". De ahí
            viene la confusión.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Ya terminó el curso? Lo puedo arrancar?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            El curso se puede arrancar en cualquier momento. Las clases no
            tienen un esquema separado por semanas, meses o cuatrimestres. Está
            diseñado para que se pueda hacer al ritmo de cada uno.
          </Typography>
          <Typography className={classes.paragraph}>
            El curso técnicamente no está terminado todavía, ya que aún se
            siguen posteando clases nuevas. Sin embargo el ritmo de subida de
            clases nuevas se redujo bastante ya que la mayoría de los temas
            importantes fueron explicados, y el objetivo de formar gente para
            que pueda conseguir trabajo se logró.
          </Typography>
          <Typography className={classes.paragraph}>
            En este punto las clases nuevas están dedicadas a enseñar nuevos
            temas que puedan mejorar las chances de entrar a un trabajo, o
            también para otros puestos (en particular, back-end), pero al llegar
            a estas últimas clases la gente típicamente está lista para aprender
            estos temas en cursos más específicos sobre las tecnologías que les
            interesen.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Qué temas se ven en este curso?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            Todas las clases de este curso utilizan el lenguaje de programación
            "Javascript". Es un lenguaje muy popular y relativamente simple,
            sobre todo para páginas web, aunque se puede usar en muchas otras
            aplicaciones.
          </Typography>
          <Typography className={classes.paragraph}>
            La primera parte del curso se centra en enseñarles las bases del
            desarrollo "front-end", es decir, la parte de las páginas web que
            los usuarios ven. Se hace mucho hincapié en tener buenas prácticas
            de programación y la importancia de los tests (código para asegurar
            que las aplicaciones funcionen bien).
          </Typography>
          <Typography className={classes.paragraph}>
            La segunda parte del curso (a partir de la clase 17) se centra en el
            desarrollo "back-end", es decir, la parte de la web que se encarga
            de guardar y procesar datos. Para esta parte se utiliza "NodeJS",
            una versión de JavaScript diseñada para correr en servidores.
          </Typography>
          <Typography className={classes.paragraph}>
            Otras tecnologías importantes que se ven a lo largo del curso son:
          </Typography>
          <Grid container spacing={3}>
            {[
              'Git',
              'Github',
              'React',
              'Cypress',
              'Jest',
              'ESLint',
              'NPM',
              'Babel',
              'Bootstrap',
              'jQuery',
              'SQL',
              'Typescript',
            ].map((tech) => (
              <Grid item xs={6} md={3} lg={2}>
                <Paper className={classes.paper}>
                  <Typography component="span">{tech}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Donde se envían las tareas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            Si terminaste cualquier tarea y tenés alguna duda, o simplemente
            querés una corrección completa, primero unite al{' '}
            <a target="_blank" rel="noopener noreferrer" href={slackLink}>
              Slack
            </a>{' '}
            del programa.
          </Typography>
          <Typography className={classes.paragraph}>
            Una vez allí, a la izquierda hay una lista que dice "Canales" con un
            símbolo "+" al costado. Al hacer click en ese botón, vas a ver la
            lista de canales. Simplemente buscá el canal de la clase que acabás
            de ver (#clase-1, #clase-2, etc), y luego enviá un mensaje con tu
            tarea.
          </Typography>
          <Typography className={classes.paragraph}>
            El grupo está completamente comformado por voluntarios, por lo que
            puede no haber gente disponible, pero típicamente alguien responde
            en menos de 24hs. Si ves que nadie responde a tu mensaje en menos de
            24hs, podés enviarlo de nuevo sin problema.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Qué es slack? Como entro?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://slack.com/intl/es-ar/"
            >
              Slack
            </a>{' '}
            es una herramienta de comunicación colaborativa, similar a Discord o
            Microsoft Teams. Es muy utilizada en el mundo laboral, sobre todo en
            sistemas.
          </Typography>
          <Typography className={classes.paragraph}>
            Slack nos permite crear canales para tareas y discusiones sobre
            temas específicos, y también da la posibilidad de mandar mensajes
            privados entre los usuarios.
          </Typography>
          <Typography className={classes.paragraph}>
            Esta herramienta funciona tanto en web como en escritorio y celular.
            Si querés descargar la aplicación, hacé click{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://slack.com/intl/es-ar/downloads"
            >
              aquí
            </a>
            . Una vez que la tengas descargada, podés crear una cuenta y unirte
            al grupo de r/argentina programa a través de este{' '}
            <a target="_blank" rel="noopener noreferrer" href={slackLink}>
              link de invitación
            </a>
            .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Donde puedo ver los documentos que se usan en las clases? Donde está
            el link para X archivo?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            Los documentos del curso principal están subidos a{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/drive/folders/16FeMDUE-Mdu5Bgsw8S_P7Cahoa7DMRUQ"
            >
              este google drive
            </a>
            . También podés revisar los "bookmarks" de los canales relevantes a
            lo que buscás, al lado del título del canal en slack, o en la
            descripción del video en cuestión.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Slack me dice que puedo "desbloquear" mensajes viejos pagando, es
            así?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            Sí y no. Ninguna persona individualmente puede desbloquear los
            mensajes viejos, es algo que tendríamos que activar para todo el
            slack. Sin embargo, el modelo de negocio de slack requiere que se
            pague un monto por cada usuario.
          </Typography>
          <Typography className={classes.paragraph}>
            Siendo una comunidad gratuita y abierta con más de 3.000 usuarios
            registrados, el costo de hacer esto es simplemente demasiado alto,
            por lo que actualmente los mensajes viejos de slack se van borrando.
          </Typography>
          <Typography className={classes.paragraph}>
            Esto es algo molesto, pero actualmente no tenemos planes de cambiar
            a ningún otro servicio, por lo que es algo con lo que tenemos que
            lidiar.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Qué son las clases de react? Debería verlas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            Las clases de react son un curso paralelo que creó otro mentor del
            grupo, Julián Absatz. La idea es complementar el curso de Javascript
            con estas clases, una vez que se avance lo suficiente en el primer
            curso. La razón por la cual son parte de un curso "paralelo" es
            porque las hizo otro mentor, para que Fabricio pudiera concentrarse
            más en otros aspectos del curso. Aún asi, es una herramienta
            indispensable.
          </Typography>
          <Typography className={classes.paragraph}>
            React es una librería de javascript específicamente diseñada para
            crear el "front-end" de las páginas web (es decir, todo lo que se
            muestra en el navegador). Es muy utilizada a nivel profesional, y se
            recomienda fuertemente ver estas clases en algún momento.
          </Typography>
          <Typography className={classes.paragraph}>
            Antes de verlas se recomienda tener un buen manejo de Javascript
            básico, siguiendo el curso de programación de r/argentina programa,
            se obtiene un nivel suficiente para empezar con React cerca de la
            clase 10 o 12.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Alguien hizo una pregunta en un canal de Slack y yo sé la respuesta!
            Puedo responderle?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            Absolutamente! Cualquier aporte es bienvenido. Incluso si no estás
            muy seguro de la respuesta que das, podés hacerla igual pidiendo una
            segunda opinión de alguien más.
          </Typography>
          <Typography className={classes.paragraph}>
            La idea de este grupo es que sea una <b>comunidad</b> donde todos
            puedan ayudarse entre sí, y responder preguntas también es una
            excelente forma de aprender.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Se puede conseguir trabajo de programación siguiendo este curso?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            Definitivamente, aunque también requiere el esfuerzo de parte de
            uno. Tenemos decenas de participantes que ya consiguieron trabajo
            por medio de este curso, y muchos de ellos siguen activos en el
            slack respondiendo preguntas.
          </Typography>
          <Typography className={classes.paragraph}>
            Se pueden hacer preguntas más específicas en el slack, pero al
            llegar a la clase 14 aproximadamente y terminando las clases de
            React, ya deberías tener el nivel para conseguir un trabajo de
            desarrollador Front-End Junior.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            SEGURO que puedo conseguir trabajo? Mirá que tengo 40 años eh.
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            Sí! La edad no es un factor demasiado relevante a la hora de
            conseguir trabajo. Tenemos muchas historias de gente con 30, 35, 40
            años que han conseguido trabajo de desarrollador, después de años de
            dedicarse a rubros completamente diferentes.
          </Typography>
          <Typography className={classes.paragraph}>
            Si no nos creés, podés revisar nuestra{' '}
            <Link aria-label="Testimonios" to="/testimonios">
              página de testimonios
            </Link>
            , donde podés leer sobre gente del curso que ya consiguió trabajo de
            desarrollador!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Y como consigo trabajo?
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.paragraph}>
            Obviamente el camino para conseguir un trabajo va a variar de
            persona en persona. Sin embargo la herramienta que mejores
            resultados da en nuestra experiencia es la red social{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/"
            >
              LinkedIn
            </a>
            .
          </Typography>
          <Typography className={classes.paragraph}>
            Cuando te sientas preparado para buscar un trabajo como
            desarrollador, te recomendamos crearte una cuenta de LinkedIn y
            agregar gente del curso a tu red. Esto aumenta mucho tus chances de
            que un recruiter te encuentre.
          </Typography>
          <Typography className={classes.paragraph}>
            También podés revisar el canal #job-board del slack, donde todos
            pueden postear ofertas de trabajo ideales para gente que recién
            arranca.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
