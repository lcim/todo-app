This App is a React ToDo App with five components: 
ProjectForm, ProjectTasks (which has a sub-component: ProjectUpdater), Door, Confetti, and Footer. 

The ProjectForm handles user inputs(tasks/projects/schedule) - It receives props from the parent App and adds the tasks.
The Door component receives no property but used to render the "door". Two sliding doors that shields the App from accidental modification/deletion/editing.
Confetti is used to render ReactConfetti only
Footer renders my social icons that links to my social media handles
ProjectTasks receives the tasks/projects and used alongside other helper props from App to handle both task editing and re-adding tasks. The child, ProjectUpdater handles the completion status of projects/tasks - checked or not.