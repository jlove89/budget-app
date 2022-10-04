/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { Card } from "react-bootstrap";
import { currencyFormatter } from "../utils";

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
