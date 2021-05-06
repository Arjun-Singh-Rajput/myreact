import React from 'react';

function Footerlink(props)
{
  return(
  <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 className="headin5_amrc col_white_amrc pt2">{props.title}</h5>

                        <ul className="footer_ul_amrc">
                            <li><a href="http://webenlance.com">{props.sub}</a></li>
                            <li><a href="http://webenlance.com">{props.sub1}</a></li>
                            <li><a href="http://webenlance.com">{props.sub2}</a></li>
                            <li><a href="http://webenlance.com">{props.sub3}</a></li>
                        </ul>


    </div>
  );
}

export default Footerlink;