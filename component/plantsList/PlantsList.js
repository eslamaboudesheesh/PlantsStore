import React from "react";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { useRouter } from 'next/router'
import {SavedPlantsAction} from '../../redux/actions/PlantsAction'

const PlantsList = ({ MyPlantsList, inputSearch ,SavedPlantsAction}) => {
  const router = useRouter()

 const filterd = MyPlantsList.filter((e) => {
      const inputSearchLowercase = inputSearch.toLowerCase();

      return e.title.toLowerCase().includes(inputSearchLowercase);
    });
  
  return (
    <>
      {filterd.length === 0
        ? " not Items Found"
        : filterd.map((e) => {
            return (
              <Card key={e.id}>
                <Card.Header>{e.title}</Card.Header>
                <Card.Body>
                  <Card.Text>{e.body}</Card.Text>
                  <Button variant="primary" onClick={() => SavedPlantsAction(e)}>SavedIt</Button>
                </Card.Body>
              </Card>
            );
          })}
    </>
  );
};
const getPlantsFromStore = (state) => {
  return {
    MyPlantsList: state.PlantsReducers.MyPlants,
    inputSearch: state.PlantsReducers.inputsearch,
  };
};
export default connect(getPlantsFromStore , {SavedPlantsAction})(PlantsList);
