import { renderWithProviders } from '@/__tests__/utils/test-utils'
import { TaskPage } from '@/feature/task/pages/TasksPage'
import { TaskState } from '@/store/task/slice'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const initialTasks: TaskState[] = [
  {
    id: '1',
    title: 'Task 1',
    done: false,
  },
  {
    id: '2',
    title: 'Task 2',
    done: true,
  },
]

describe('Tasks', () => {
  const user = userEvent.setup()

  it('Render Task Page', () => {
    renderWithProviders(<TaskPage />)

    const taskPage = screen.getByTestId('task-page')

    expect(taskPage).toBeInTheDocument()
  })

  it('Render Task Counter and default values should be 0', () => {
    renderWithProviders(<TaskPage />)

    const taskCounter = screen.getByTestId('task-counter')
    const totalTask = screen.getByTestId('total-tasks')
    const pendingTask = screen.getByTestId('pending-tasks')
    const doneTask = screen.getByTestId('done-tasks')

    expect(taskCounter).toBeInTheDocument()
    expect(totalTask).toHaveTextContent('0')
    expect(pendingTask).toHaveTextContent('0')
    expect(doneTask).toHaveTextContent('0')
  })

  it('Render Task counter with two total task ', () => {
    renderWithProviders(<TaskPage />, {
      preloadedState: {
        tasks: initialTasks,
      },
    })

    const taskCounter = screen.getByTestId('task-counter')
    const totalTask = screen.getByTestId('total-tasks')

    expect(taskCounter).toBeInTheDocument()
    expect(totalTask).toHaveTextContent('2')
  })

  it('Render Task counter with one done task ', () => {
    renderWithProviders(<TaskPage />, {
      preloadedState: {
        tasks: initialTasks,
      },
    })

    const taskCounter = screen.getByTestId('task-counter')
    const doneTask = screen.getByTestId('done-tasks')

    expect(taskCounter).toBeInTheDocument()
    expect(doneTask).toHaveTextContent('1')
  })

  it('Render two task in the list ', () => {
    renderWithProviders(<TaskPage />, {
      preloadedState: {
        tasks: initialTasks,
      },
    })

    const list = screen.getAllByTestId('task')
    expect(list.length).toEqual(2)
  })

  it('Remove one task from the list ', async () => {
    renderWithProviders(<TaskPage />, {
      preloadedState: {
        tasks: initialTasks,
      },
    })

    const list = screen.getAllByTestId('task')
    expect(list.length).toEqual(2)

    const deleteButton = await screen.findAllByTestId('delete-task-button')
    user.click(deleteButton[0])

    waitFor(() => {
      const updatedList = screen.getAllByTestId('task')
      expect(updatedList.length).toEqual(1)
    })
  })

  it('Mark as done one task from the list ', async () => {
    renderWithProviders(<TaskPage />, {
      preloadedState: {
        tasks: initialTasks,
      },
    })

    const list = screen.getAllByTestId('task')
    expect(list.length).toEqual(2)

    const markAsDoneButton = await screen.findAllByTestId('mark-as-done')
    user.click(markAsDoneButton[0])

    waitFor(() => {
      const doneTask = screen.getByTestId('done-tasks')
      expect(doneTask).toHaveTextContent('2')
    })
  })

  it('Add one task to the list ', async () => {
    renderWithProviders(<TaskPage />, {
      preloadedState: {
        tasks: initialTasks,
      },
    })

    const list = screen.getAllByTestId('task')
    expect(list.length).toEqual(2)

    const addTaskInput = screen.getByTestId('new-task-input')
    user.type(addTaskInput, 'Task 3')
    user.keyboard('{enter}')

    waitFor(() => {
      const updatedList = screen.getAllByTestId('task')
      expect(updatedList.length).toEqual(3)
      const newTaskAdded = screen.getByText('Task 3')
      expect(newTaskAdded).toBeInTheDocument()
    })
  })

  it('Edit one task from the list ', async () => {
    renderWithProviders(<TaskPage />, {
      preloadedState: {
        tasks: initialTasks,
      },
    })

    const list = screen.getAllByTestId('task')
    expect(list.length).toEqual(2)

    const editTaskButton = await screen.findAllByTestId('edit-task-button')
    user.click(editTaskButton[0])

    const editTaskInput = screen.getByTestId('edit-task-input')
    user.type(editTaskInput, ' edited')
    user.keyboard('{enter}')

    waitFor(() => {
      const updatedList = screen.getAllByTestId('task')
      expect(updatedList.length).toEqual(2)
      const editedTask = screen.getByText('Task 1 edited')
      expect(editedTask).toBeInTheDocument()
    })
  })
})
