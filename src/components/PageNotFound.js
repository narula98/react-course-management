import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function PageNotFound(props) {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>
                <Link to="/"></Link>
            </p>
        </div>
    );
}

export default PageNotFound;