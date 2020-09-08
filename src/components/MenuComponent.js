import React from "react";
import {Card, CardImg, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom';

function RenderMenuItem({dish, onClick}) {
    return (
        <Card>
            {/*For each specific dish, the corresponding dish.id is evaluated here.
             And it will be substituted. So if the id is 1 the address will become
             /menu/1 */}
            <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );

}



const Menu = (props) => {
    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-12 m-1">
                <RenderMenuItem dish={dish}/>
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/home'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
            {/*{this.renderDish(this.state.selectedDish)}*/}
        </div>
    )
};



export default Menu;