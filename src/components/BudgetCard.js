import { Card } from "react-bootstrap";
import { currencyFormatter } from "../utils";

export default function BudgetCard({amount, name, max}) {
  return (
    <Card>
        <Card.Body>
            <Card.Title>
                <div>{name}</div>
                <div>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</div>
            </Card.Title>
        </Card.Body>
    </Card>
  )
}
