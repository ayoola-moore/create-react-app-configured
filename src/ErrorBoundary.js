import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        error: '',
        errorInfo: '',
        hasError: false,
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }
    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service like new relic
        // logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <TemporaryErrorHandler />
        }
        return this.props.children
    }
}

export const TemporaryErrorHandler = () => (
    <h1>An error has occured. consider using an error tracker.</h1>
)
