import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Form from "./components/Form/Form"
import Posts from "./components/Posts/Posts"
import { getPosts } from './actions/posts.js'
import ert_ale from "./images/images.jpg"
import useStyles from './styles'

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])

  return (
   <Container maxWidth="lg">
     <AppBar className={classes.appBar} position="static" color="inherit">
       <Typography className={classes.heading} variant="h2" align="center">Ert-Ale</Typography>
       <img className={classes.image} src={ert_ale} alt="memories" height="60" style={ {'borderRadius' : '100px', 'marginTop': '5px'}}/>
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
