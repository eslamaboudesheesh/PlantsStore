import React from 'react';
import { Button , Nav  } from "react-bootstrap";
import { connect } from 'react-redux';
import {searchPlants} from '../../redux/actions/PlantsAction'
import Link from 'next/link'

const  Navcomponent = ({searchPlants , inputSearch , SaveItemLength , children }) => {
    return (
      <>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Link href="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link eventKey="link-1" href="/save" >Save </Link>
            <span> { SaveItemLength && SaveItemLength.length}</span>
          </Nav.Item>
        </Nav>
        <form>
          <input
            type="text"
            name="searchname "
            placeholder="search here"
            onChange={(event) => searchPlants(event.target.value)}
            value={inputSearch}
          />
        </form>
        {children}
      </>
    );
}
const getInputSearchValue = state => {
    return {
        inputSearch :  state.PlantsReducers.inputsearch,
        SaveItemLength : state.plantsSavedReducers.mySavedPlants
    }
}

export default connect(getInputSearchValue,{searchPlants}) (Navcomponent)