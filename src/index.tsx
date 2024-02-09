import { render } from 'react-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundery';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import App from './app/App';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
