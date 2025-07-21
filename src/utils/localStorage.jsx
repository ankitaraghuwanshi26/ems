const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design UI Mockups",
        description: "Create UI wireframes for the dashboard.",
        date: "2025-07-11",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve the 500 error during login.",
        date: "2025-07-10",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Daily Standup",
        description: "Attend daily team sync.",
        date: "2025-07-11",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "API Integration",
        description: "Integrate task list API with frontend.",
        date: "2025-07-12",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review PRs of teammates.",
        date: "2025-07-11",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Client Feedback Analysis",
        description: "Go through recent feedback from clients.",
        date: "2025-07-10",
        category: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write Documentation",
        description: "Add new pages to the API docs.",
        date: "2025-07-13",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Fix overlap issue on mobile view.",
        date: "2025-07-11",
        category: "Bug",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Database Schema",
        description: "Design tables for new modules.",
        date: "2025-07-09",
        category: "Database",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team Meeting",
        description: "Discuss upcoming release.",
        date: "2025-07-11",
        category: "Meeting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Performance Testing",
        description: "Run load tests for backend.",
        date: "2025-07-12",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy to Production",
        description: "Push stable version to live server.",
        date: "2025-07-10",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Monitor Logs",
        description: "Check error logs post-deployment.",
        date: "2025-07-11",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Add Google Login",
        description: "Enable Google OAuth for login.",
        date: "2025-07-13",
        category: "Authentication",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin = [{
  "id": 101,
  "email": "admin@example.com",
  "password": "123"
}]



export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))

    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage= ()=>{
  const employee = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return{admin, employee}
    
}
