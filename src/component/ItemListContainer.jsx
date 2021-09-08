import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ItemListContainer(props) {


  
return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.greeting}</Card.Title>
                <Card.Text>
                    Descripcion del producto
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
        </Card>
    </>
)
}

export default ItemListContainer