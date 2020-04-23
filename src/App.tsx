import React, {useEffect, useReducer, useState} from 'react';
import logo from './logo.jpg';
import {Result} from './Result';

interface JokeResponse {
    value: {
        joke: string
    }
}

const replaceHtmlEntities = (input: string): string =>
    input.replace(/&quot;/g, '"');

const fetchJoke = (): Promise<string> =>
    fetch("http://api.icndb.com/jokes/random")
        .then(response => response.json() as Promise<JokeResponse>)
        .then(json => json.value.joke)
        .then(replaceHtmlEntities);

export type State =
    | { status: 'empty' }
    | { status: 'loading' }
    | { status: 'success', jokeText: string }
    | { status: 'error', error: Error }
    ;

type Action =
    | { type: 'load' }
    | { type: 'received', jokeText: string }
    | { type: 'failed', error: Error }
    ;

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'load':
            return {status: 'loading'};
        case 'received':
            return {status: 'success', jokeText: action.jokeText};
        case 'failed':
            return {status: 'error', error: action.error};
    }
};

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, {status: 'empty'});

    useEffect(() => refreshJoke(), []);

    const refreshJoke = () => {
        dispatch({type: 'load'});

        fetchJoke()
            .then(jokeText => dispatch({type: 'received', jokeText}))
            .catch(error => dispatch({type: 'failed', error}));
    };

    return (
        <div className="App, container-fluid">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <main>
                <Result state={state}/>
            </main>
            <footer>
                <button className="btn btn-primary" onClick={refreshJoke}>Refresh</button>
            </footer>
        </div>
    );
};

export default App;
