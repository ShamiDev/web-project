import React, { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import Navbar from "../components/Navbar"; // Import the Navbar component
// import WorkoutDetails from "../components/WorkoutDetails";
// import WorkoutForm from "../components/WorkoutForm";
// import { Link } from "react-router-dom";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <Navbar /> {/* Use the Navbar component */}
      {/* <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm /> */}

      {/* <Link to="/Admin">
        <button>Go to Admin</button>
      </Link> */}
    </div>
  );
};

export default Home;
