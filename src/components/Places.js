import React from 'react';

function Places(props) {
    return (
        <section className="places">
            {props.children}
        </section>
    )
}

export default Places;