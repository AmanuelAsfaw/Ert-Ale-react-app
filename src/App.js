import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import ert_ale from "./images/images.jpg"
import useStyles from './styles'

function App() {
  const classes = useStyles()

  return (
   <Container maxWidth="lg">
     <AppBar className={classes.appBar} position="static" color="inherit">
       <Typography className={classes.heading} variant="h2" align="center">Ert-Ale</Typography>
       <img className={classes.image} src={ert_ale} alt="memories" height="60"/>
     </AppBar>
     <Grow in>
       <Container>
         <Grid container justifyContent="space-between" alignItems="stretch" spacing={4}>
           <Grid item xs={12} sm={7}>
             <Posts/>
           </Grid>
           <Grid item xs={12} sm={4}>
             <Form/>
           </Grid>
         </Grid>
       </Container>
     </Grow>
   </Container>
  );
}

export default App;
