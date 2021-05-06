import React from 'react';
import {Button, Accordion, Card} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import Tabeldata from '../com/Tabeldata';

function Productdetail(props)
{
    return(
        <>
        <div style={{background:"#FEF5EA", paddingTop:"70px"}}>
            <div className="container">
                <div className="row">
                    <div class="col-sm-6">
                        <h1>{props.title}</h1>
                        <p>{props.dis}</p>

                        <hr></hr>
                        <h3>{props.subtitle}</h3>
                        <div className="row">
                            <div className="col-6">
                                <img src={props.inimg} width="70%" />
                                <h4>{props.pname}</h4>
                                <p>{props.pdis}</p>
                            </div>
                            <div className="col-6">
                            <img src={props.inimg1} width="70%" />
                                <h4>{props.pname1}</h4>
                                <p>{props.pdis}</p>
                            </div>
                            
                        </div>

                        <hr></hr>

                        <h3>Nutritional</h3>
                        <p>Egg-free, Non-GMO, Cholesterol-free, Plant-based, 5g of protein/serving.</p>

                        <a src="" className="accordion">Nutrition Facts</a>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <Accordion defaultActiveKey="1">
  
      <Accordion.Toggle as={Link} variant="link" eventKey="0">
      Nutrition Facts
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="0">
      <Card.Body>Egg-free, Non-GMO, Cholesterol-free, Plant-based, 5g of protein/serving.
      <p>Ingredients</p>
      <p>Water, Mung Bean Protein Isolate, Expeller-Pressed Canola Oil, Contains less than 2% of Dehydrated Onion, Gellan Gum, Natural Carrot Extractives (color), Natural Flavors, Natural Turmeric Extractives (color), Potassium Citrate, Salt, Soy Lecithin, Sugar, Tapioca Syrup, Tetrasodium Pyrophosphate, Transglutaminase, Nisin (preservative). (Contains soy.)</p>
      <Tabeldata />
<p>* The percent daily values tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
      </Card.Body>
    </Accordion.Collapse>
  
  
</Accordion>


                    </div>
                
                <div class="col-sm-6">
                    <img src={props.mainimg} style={{width:"80%"}} />
                </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Productdetail;