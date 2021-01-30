import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Paper, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserForm } from './components/UserForm';

function App() {
  const classes = useStyles();
  return (
    <>
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <IconButton edge="start"
          color="inherit" aria-label="menu" className={classes.menuButton}>
          </IconButton>
          <Typography variant="h5" className={classes.title}> ZLP Technologies </Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Пройти анкетирование</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    <main>
      <Paper className={classes.mainFeaturePost}
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80)"}}>
          <Container>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={8}>
                <div className={classes.mainFeaturePostContent}>
                  <Typography
                    component="h1"
                    variant="h4"
                    color="inherit"
                    gutterBottom
                    >
                    Инвестиционный подбор
                  </Typography>
                  <Typography
                    variant="h6"
                    color="inherit"
                    paragraph
                    >
                    Информационная система финансового планирования компании предоставляет возможность подбора индивидуальных инвестиционных предложений для клиентов.
                  </Typography>
                  <Button variant="contained" color="secondary" >
                    Подобрать свой портфель
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
      </Paper>

      <div className={classes.mainContent}>
        <Container >
          <Typography variant="h4" color="textPrimary" gutterBottom>Узнайте, куда лучше сейчас инвестировать
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>Пройдите тест, который определит ваш тип инвестора и какие активы стоит рассмотреть для вложения денег
          </Typography>
        </Container>
      </div>
      <div className={classes.mainContentForm}>
        <UserForm></UserForm>
      </div>
    </main>

    <footer className={classes.mainContent}>
      <Typography variant="subtitle1" align="center" gutterBottom color="textSecondary" component="p">
        Copyright © Каткова Н.А. 2021
      </Typography>
    </footer>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturePost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(3),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturePostContent: {
    position: "relative",
    padding: theme.spacing(8),
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(8),

  },
  mainContent: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(15)
  },
  mainContentForm: {
    padding: theme.spacing(5),
    marginLeft: theme.spacing(25),
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
}))

export default App;
