import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };
    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Typically you would log this to a service like TrackJS or NewRelic
        console.error("Error boundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    There was an error with this listing. <Link to="/">Click here</Link> to go back to the home page or wait five seconds.
                </h2>
            );
        }

        return this.props.children;
    }

}

export default ErrorBoundary;

