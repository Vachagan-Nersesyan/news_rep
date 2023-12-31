import React from 'react'
import styles from './CardStl.module.css'
import { Card, Button } from 'react-bootstrap'

interface OwnProps {
    cardInfo: Array<CardArrType>
}

interface CardArrType {
    id: number,
    title: string,
    text: string,
    picture: string,
    publishDate: string,
}

const CardComp: React.FC<OwnProps> = ({ cardInfo }) => {

    const cardData =  cardInfo.map((val) => {
        return (
            <div key={val.id} className={styles.card_content_item}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={val.picture} className={styles.img_card} />
                    <Card.Body>
                        <Card.Title>{val.title}</Card.Title>
                        <Card.Text>
                            {val.text}
                        </Card.Text>
                        <Card.Text>
                            {val.publishDate}
                        </Card.Text>
                        <Button variant="primary">Click</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    return (
       <div className={styles.card_content}>
            {
                cardData
            }
       </div>
    )

}

export default CardComp
