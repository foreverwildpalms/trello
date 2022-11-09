import React, {FC} from 'react';
import { Card, Title } from '../styles/styledCard';
import { connect } from 'react-redux';
import creatingBoard from '@/actions/creatingBoard'

interface DispatchProps {
    creatingBoard: () => {
        type: string,
        payload: boolean
    }
}

const CreateCard: FC<DispatchProps> = ({ creatingBoard }) => {
    return <Card onClick={creatingBoard}>
        <Title>Создай новую доску...</Title>
    </Card>
}

export default connect<null, DispatchProps>(null, { creatingBoard })(CreateCard);