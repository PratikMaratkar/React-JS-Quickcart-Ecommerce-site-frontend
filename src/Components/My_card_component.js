import {Card,Button} from 'react-bootstrap';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

function My_card_component(props)
{
    return(
        <Link to="/ProductInformation">
        <div className="my_Card">

                <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={props.product_image} />
                <Card.Body>

                    <Card.Title>
                    {props.product_name}
                    </Card.Title>
                    
                    <Card.Text>
                    {props.product_price}
                    </Card.Text>

                    <Card.Text>
                    {props.product_description}
                    </Card.Text>

                    <Button className="mx-auto d-block" variant="dark">Buy Now</Button>

                </Card.Body>
                </Card>


        </div>
        </Link>

    );

}

export default My_card_component;