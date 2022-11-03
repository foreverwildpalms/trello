import React from 'react';
import { Card, Title } from '../styles/styledCard';
import { connect } from 'react-redux';
import creatingBoard from '@/actions/creatingBoard'

const CreateCard = ({ creatingBoard }) => {
    return <Card onClick={creatingBoard}>
        <Title>Создай новую доску...</Title>
    </Card>
}

export default connect(null, { creatingBoard })(CreateCard);