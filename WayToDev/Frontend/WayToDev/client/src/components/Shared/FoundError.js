import React from 'react'

import './FoundError.css';


function FoundError() {
    return (
        <div class="foundError">
            <section id="not-found">
                <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
                    <div class="circles">
                         <p>404<br></br>
                            <small>PAGE NOT FOUND</small>
                        </p>
                            <span class="circle big"></span>
                            <span class="circle med"></span>
                            <span class="circle small"></span>
                    </div>
            </section>
        </div>
    )
}

export default FoundError
