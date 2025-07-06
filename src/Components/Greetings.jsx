const Greetings = ({timeOfDay}) => {
  return timeOfDay === 'afternoon' ? (<h1>Good Morning</h1>) : (<h1>Good afternoon</h1>)

  
};

export default Greetings;
