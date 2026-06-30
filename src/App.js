// import logo from './logo.svg';
import './App.scss';
import Box from './components/Box/Box';
import Expertise from './components/Expertise/Expertise';
import Feedback from './components/Feedback/Feedback';
import reporterAvatar from './assets/images/reporter_img.png'
import Info from './components/Info/Info';
import Navigation from './components/Navigation/Navigation';
import Panel from './components/Panel/Panel';
import Portfolio from './components/Portfolio/Portfolio';
import TimeLine from './components/TimeLine/TimeLine';
import Address from './components/Address/Address';

function App() {
  const expertiseMockData = [
    {
      date: "2013-2014",
      info: {
        company: "Google",
        job: "Front-end developer / php programmer",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
      }
    },
    {
      date: "2012",
      info: {
        company: "Twitter",
        job: "Web developer",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
      }
    }
  ];


  const feedbackData = [
    {
      feedback: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      reporter: {
        photoUrl: reporterAvatar,
        name: "John Doe",
        citeUrl: "https://www.citeexample.com"
      }
    },
    {
      feedback: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
      reporter: {
        photoUrl: reporterAvatar,
        name: "John Doe",
        citeUrl: "https://www.citeexample.com"
      }
    }
  ]


  return (
    <div className="App">
      {/* <Box/> */}
      {/* <Expertise title="Expertise" data={expertiseMockData} />
      <br></br>
      <Feedback title="Feedback" data={feedbackData} /> */}
      {/* <Info title="Item" content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. " /> */}
      {/* <Navigation /> */}
      {/* <Panel /> */}
      {/* <Portfolio /> */}
      {/* <TimeLine /> */}
      <Address />
    </div>
  );
}

export default App;
