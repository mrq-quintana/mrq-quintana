import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ItemListContainer() {
return (
    <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../img/Logo_red.png" />
            <Card.Body>
                <Card.Title>Producto</Card.Title>
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