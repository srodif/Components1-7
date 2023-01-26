import React from 'react'
import { Age } from './Age'

export class Welcome extends React.Component {
    render({name = "user"}) {
        return <div>
            <p>Welcome, {this.props.name}</p>
            { this.props.age > 18 ?
                <Age age={this.props.age} />
                : <></>
            }
        </div>
    }
}