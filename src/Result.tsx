import React from 'react';
import {State} from "./App";

interface Props {
    state: State;
}

export const Result: React.FC<Props> = ({state}) => <>
    {state.status === 'success' &&
    <div role="status">
        {state.jokeText}
    </div>
    }
    {state.status === 'error' &&
    <div role="status" className="alert alert-danger">
        {state.error.message}
    </div>
    }
    {state.status === 'loading' &&
    <div role="status" className="spinner-border">
        <span className="sr-only">Loading...</span>
    </div>
    }
</>;
