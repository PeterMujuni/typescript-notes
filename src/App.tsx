import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Input } from './components/Input';
import { LoggedIn } from './components/state/LoggedIn';
// import { User } from './components/state/User';
import { User } from './components/context/User'
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Status } from './components/Status';
// import { Greet } from './components/Greet';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';

function App() {
  // const personName = {
  //   firstName: 'Bruce',
  //   lastName: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     firstName: 'Bruce',
  //     lastName: 'Wayne'
  //   },
  //   {
  //     firstName: 'Clark',
  //     lastName: 'Kent'
  //   },
  //   {
  //     firstName: 'Princess',
  //     lastName: 'Diana'
  //   }
  // ]

  return (
    <div className="App">
      {/* <Greet name="Peter" messageCount={20} isLoggedInd={false} /> */}
      {/* <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status='success' /> */}
      
      {/* children props */}
      {/* <Heading>Placeholder text</Heading> */}

      {/* passing react components as children props */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicapario</Heading>
      </Oscar> */}
      
      {/* button element */}
      {/* <Button handleClick={(event, id) => {console.log('Button Clicked', event, id)}}/> */}
     
      {/* input element */}
      {/* <Input value="" handleChange={(event) => {console.log(event)}}/> */}
      
      {/* styles props */}
      {/* <Container styles={{ border: '1px solid black', padding: '1rem'}}/> */}

      {/* <LoggedIn /> */}
      {/* <User /> */}

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
