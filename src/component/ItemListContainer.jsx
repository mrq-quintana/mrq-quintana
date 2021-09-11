import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import ItemCount from './ItemCount'

function ItemListContainer(props) {
return (
    <>
    
        <Card className= "App" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.greeting}</Card.Title>
                <Card.Text>
                    Descripcion del producto
                </Card.Text>
                <ItemCount stock={5} inicial={0} />
                {/* <Button variant="primary">Comprar</Button> */}
            </Card.Body>
            
        </Card>
        
    </>
)
}

export default ItemListContainer