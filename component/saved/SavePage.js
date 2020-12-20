import React from 'react'
import Navcomponent from '../nav-component/navcomponent'
import { connect } from 'react-redux';
import { Button, Card } from "react-bootstrap";
import { RemovedSavedPlantsAction } from '../../redux/actions/PlantsAction'

const SavePage = ({ MySavedPlantsList ,RemovedSavedPlantsAction}) => {
    return (
        <>
            <Navcomponent>

                {MySavedPlantsList.length === 0
                    ? " not Items Found"
                    : MySavedPlantsList.map((e) => {
                        return (
                            <Card key={e.id}>
                                <Card.Header>{e.title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>{e.body}</Card.Text>
                                    <Button variant="primary" onClick={() => RemovedSavedPlantsAction(e.id)}>Remove item</Button>
                                </Card.Body>
                            </Card>
                        );
                    })}
            </Navcomponent>

        </>
    )
}

const getSavedPlantsFromStore = (state) => {
    return {
        MySavedPlantsList: state.plantsSavedReducers.mySavedPlants
    };
};
export default connect(getSavedPlantsFromStore, { RemovedSavedPlantsAction })(SavePage);
