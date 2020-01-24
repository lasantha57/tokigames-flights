import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logError } from '../utils/logger';

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { errorOccurred: false }
    }

    componentDidCatch(error, info) {
        this.setState({ errorOccurred: true });
        logError(error, info)
    }

    render() {
        return this.state.errorOccurred ? <React.Fragment>
            <div>
                <p>Page not found, goto <Link to="/" className="btn btn-link">Home</Link></p>
            </div>
        </React.Fragment> : this.props.children;
    }
}

export default ErrorHandler;