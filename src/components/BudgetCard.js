import {Card} from "react-bootstrap";

export default function BudgetCard() {
  return (
    <Card>
        <Card.Body>
            <Card.Title>
                <div>{name}</div>
                <div>{amount} / {max}</div>
            </Card.Title>
        </Card.Body>
    </Card>
  )
}
