<script>
  import {Route, Router} from "svelte-routing";
  import LandingPage from "../pages/LandingPage.svelte";
  import LoginPage from "../pages/LoginPage.svelte";
  import HomePage from "../pages/HomePage.svelte";
  import RegisterPage from "../pages/RegisterPage.svelte";
  import MealPage from "../pages/RecipeProcedures/MealPage.svelte";
  import Profile from "../pages/Profile/Profile.svelte";
</script>

<Router>  
    <Route path='/' component={LandingPage}></Route>
    <Route path="/login" component={LoginPage}></Route>
    <Route path="/registerPage" component={RegisterPage}></Route>
    <Route path="/homePage" component={HomePage}></Route>

    <Route path="/mealPage/:id" let:params>
          <MealPage id={params.id}/>
    </Route>

    <Route path='/profile' component={Profile}></Route>


    
</Router>







