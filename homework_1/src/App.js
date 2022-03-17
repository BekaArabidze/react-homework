import './App.css';
import Counter from './components/Counter';
import WeekDays from './components/WeekDays';


function App() {
    const days = [
        { id: 1, day: 'ორშაბათი' },
        { id: 2, day: 'სამშაბათი' },
        { id: 3, day: 'ოთხშაბათი' },
        { id: 4, day: 'ხუთშაბათი' },
        { id: 5, day: 'პარასკევი' },
        { id: 6, day: 'შაბათი' },
        { id: 7, day: 'კვირა' },
    ]

    


    return (
        <>
            <WeekDays days={days}/>
            <Counter />
        </>
    );
}

export default App;
