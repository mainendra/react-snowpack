import React, { useEffect } from 'react';
import create from 'zustand';
import './App.css';

const useStore = create(set => ({
    count: 0,
    setCount: (count) => set(state => ({ ...state, count }))
}));

function App() {
    const { count, setCount } = useStore(state => state);
    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 100);
        return () => clearTimeout(timer);
    }, [count, setCount]);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Page has been open for <code>{count * 100}</code> milliseconds.
                </p>
            </header>
        </div>
    );
}

export default App;
