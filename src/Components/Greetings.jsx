const Greetings = ({ timeOfDay }) => {
  let greeting = "";

  if (timeOfDay === "morning") {
    greeting = "Good Morning!";
  } else if (timeOfDay === "afternoon") {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Hello!";
  }

  return <div><h2>{greeting}</h2></div>;
};

export default Greetings;
