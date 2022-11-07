import React from 'react';
import { connect } from 'react-redux'
import ListItem from "./ListItem";
import mapValues from 'lodash/mapValues';

const Lists = ({ activeBoardData }) => {
    const renderListItems = () => {
        const mappedList = mapValues(activeBoardData.listItems, list => list.name); // ?
        const mappedKeys = Object.keys(mappedList)

        return mappedKeys.map((id, i) => {
            return <ListItem id={id} key={i} name={mappedList[id]} />
        })

    }

    return (
        renderListItems()
    );
}

function mapStateToProps({ activeBoardData }) {
    return { activeBoardData }
}

export default connect(mapStateToProps, {})(Lists);