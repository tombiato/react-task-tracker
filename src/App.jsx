// Hooks
import { useState } from 'react';

// Components
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Coucou',
			day: '01/01/2021',
			reminder: true,
		},
		{
			id: 2,
			text: 'Hello',
			day: '02/01/2021',
			reminder: true,
		},
		{
			id: 3,
			text: 'Hola',
			day: '03/01/2021',
			reminder: false,
		},
	]);

	// Delete single task
	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	// Toggle reminder
	const toggleReminder = id => {
		setTasks(
			tasks.map(task =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className='App'>
			<div className='container'>
				<Header title='Task Tracker' />
				{tasks.length > 0 ? (
					<Tasks
						tasks={tasks}
						onDelete={deleteTask}
						onToggle={toggleReminder}
					/>
				) : (
					'No Tasks to show...'
				)}
			</div>
		</div>
	);
};

export default App;
