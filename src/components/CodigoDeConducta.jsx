import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    color: theme.palette.text.primary,
  },
});

function CodigoDeConducta(props) {
  const { classes } = props;

  return (
    <Container className={classes.root}>
      <Typography variant="h4" component="h1">
        Código de conducta
      </Typography>
      <p></p>
      <Typography variant="h5" component="h2">
        Propósito
      </Typography>
      <p>
        Un objetivo principal de todas las conferencias y grupos de usuarios que
        se refieran a este Código de Conducta es ser inclusivos para la mayor
        cantidad de personas, con la mayor variedad de orígenes y conocimientos
        posibles. Como tal, nos comprometemos a ofrecer un ambiente amigable,
        seguro y acogedor para todos, sin importar género, orientación sexual,
        capacidad, etnia, estado socio-económico, religión o creencia.
      </p>
      <p>
        Este Código de Conducta expresa nuestras expectativas con respecto a
        quienes participan de nuestra comunidad, así como también las
        consecuencias de comportamientos inaceptables.
      </p>
      <p>
        Invitamos a todos los que participan de nuestros eventos a ayudarnos a
        crear experiencias seguras y positivas para todos.
      </p>
      <Typography variant="h5" component="h2">
        Ciudadanía de Código / Cultura / Tecnología abierta
      </Typography>
      <p>
        Un objetivo suplementario de este Código de Conducta es incrementar la
        ciudadanía de código/cultura/tecnología abierta, incentivando a sus
        participantes a reconocer y fortalecer las relaciones entre nuestras
        acciones y sus efectos en nuestra comunidad.
      </p>
      <p>
        Las comunidades son espejo de las sociedades en las cuales existen y las
        acciones positivas son esenciales para contrarrestar las diversas formas
        de desigualdad y abuso de poder que existen en una sociedad.
      </p>
      <p>
        Si Ud. ve a alguien haciendo un esfuerzo extra por asegurarse que
        nuestra comunidad sea acogedora, amistosa e incentiva a todos los que
        participan en ella a contribuir de manera completa, nos gustaría
        saberlo.
      </p>
      <Typography variant="h5" component="h2">
        Comportamiento esperado
      </Typography>
      <ul>
        <li>
          Participe de un modo auténtico y activo. Al hacerlo contribuye a la
          salud y longevidad de esta comunidad.
        </li>
        <li>
          Ejercite la consideración y el respeto en su discurso y en sus
          acciones.
        </li>
        <li>Intente colaborar para evitar conflictos.</li>
        <li>
          Absténgase de discursos o comportamientos despectivos,
          discriminatorios o abusivos.
        </li>
        <li>
          Sea consciente de su entorno y de los/as otros/as participantes.
          Alerte a los líderes de la comunidad si nota alguna situación
          peligrosa, alguien sufriendo una situación comprometedora o
          violaciones de este Código de Conducta, incluso si parecieran poco
          importantes.
        </li>
      </ul>
      <Typography variant="h5" component="h2">
        Comportamiento inaceptable
      </Typography>
      <p>
        Comportamientos inaceptables incluyen: discursos o acciones
        intimidantes, acosadores, abusivos, discriminatorios, despectivos o
        degradantes. El alcance incluye a todos/as los/as participantes de
        nuestra comunidad online en todos los eventos y comunicaciones
        personales llevadas a cabo en el contexto de las actividades de nuestra
        comunidad. Los lugares en donde se lleven a cabo eventos de la comunidad
        pueden ser compartidos con gente ajena a la misma, por favor sea
        respetuoso hacia las autoridades de dichos lugares.
      </p>
      <p>
        Acoso incluye: daño o perjurio verbal o escrito relacionado con género,
        orientación sexual, raza, religión, incapacidad; uso inapropiado de
        imágenes de desnudez en espacios públicos (incluyendo presentaciones
        digitales); intimidación deliberada, acecho o persecución; fotografías o
        grabaciones abusivas; interrupción sostenida de presentaciones u de
        otros eventos; contacto físico inapropiado y atención sexual no deseada.
      </p>
      <Typography variant="h5" component="h2">
        Consecuencias del comportamiento inaceptable
      </Typography>
      <p>
        No serán tolerados los comportamientos inaceptables de parte de
        cualquier miembro de la comunidad, incluidos patrocinadores y
        aquellos/as con autoridad para tomar decisiones. Se espera de todos/as
        los/as miembros el inmediato cumplimiento al solicitársele suspender
        comportamientos inaceptables.
      </p>
      <p>
        Si un miembro incurre en comportamientos inaceptables los organizadores
        de la comunidad pueden sancionarlo de cualquier forma que se considere
        apropiada, incluyendo la suspensión temporal o permanente de su
        participación en la comunidad, sin previo aviso (y sin reintegro del
        dinero, en caso de ser un evento pago).
      </p>
      <Typography variant="h5" component="h2">
        Si es testigo o víctima de comportamiento inaceptable
      </Typography>
      <p>
        Si Ud. es víctima o testigo de comportamiento inaceptable, o tiene
        cualquier otra preocupación o problema, por favor notifíquelo a un
        organizador de la comunidad tan pronto como sea posible. Puede encontrar
        una lista de los organizadores a contactar para cada una de las
        comunidades que apoyen este código de conducta al final de esta página.
      </p>
      <p>
        Además, los organizadores de la comunidad se encuentran disponibles para
        ayudar a los miembros a contactar a las fuerzas policiales locales o, de
        lo contrario, para ayudar a sentirse seguros a aquellos que hayan sido
        víctimas de comportamiento inaceptable. En el contexto de eventos
        presenciales, los organizadores también proveerán escolta a las personas
        que hayan sufrido dichas experiencias.
      </p>
      <Typography variant="h5" component="h2">
        Desagravios
      </Typography>
      <p>
        Si Ud. siente que ha sido falsa o injustamente acusado/a de violar este
        Código de Conducta, se le sugiere notificar a uno de los organizadores
        del evento con una descripción concisa del agravio. El mismo será
        contemplado y resuelto de acuerdo a las políticas existentes.
      </p>
      <Typography variant="h5" component="h2">
        Alcance
      </Typography>
      <p>
        Se espera que todos los participantes de la comunidad (colaboradores/as
        -pagos o no-, patrocinadores y otros/as invitados/as) se atengan a este
        Código de Conducta en todos los lugares de encuentro de la comunidad
        –online o en persona– así como en todas las comunicaciones uno-a-uno
        relacionadas con actividades de la comunidad.
      </p>
      <Typography variant="h5" component="h2">
        Licencia y atribución
      </Typography>
      <p>
        El código de conducta de r/Argentina Programa se encuentra distribuido
        bajo una licencia Creative Commons Attribution - ShareAlike. Está basado
        en el{' '}
        <a
          href="https://meetupjs.com.ar/coc.html"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Código de Conducta
        </a>{' '}
        de meetupjs.com.ar, que también es distribuido bajo la misma licencia.
      </p>
    </Container>
  );
}

export default withStyles(styles)(CodigoDeConducta);
