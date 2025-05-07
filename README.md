# IT-Helpdesk System

A comprehensive IT Helpdesk ticket management system with separate user and admin interfaces. This system allows users to submit IT-related problem tickets and enables administrators to manage, track, and resolve these tickets efficiently.

## Project Structure

The project consists of two main components:

- **User IT Helpdesk**: Client-facing interface for end users to submit and track their IT problem tickets
- **Admin IT Helpdesk**: Administrative interface for IT staff to manage tickets, users, and monitor system performance

## Features

### User Interface Features

- **Ticket Management**
  - Create new problem tickets with detailed descriptions
  - View and track ticket status (Open, On Progress, Solved, Expired)
  - View ticket history and details
- **User Dashboard**
  - Quick overview of ticket statistics
  - Status cards showing Open, On Progress, Problem, and Solved tickets
- **Knowledge Base**
  - Access to helpful articles and tutorials
  - Tutorial section with instructional videos
- **UI Components**
  - Responsive navigation bar
  - WhatsApp support integration
  - Filter and search functionality for tickets
  - Modern and user-friendly design

### Admin Interface Features

- **Comprehensive Dashboard**
  - Overall system statistics
  - Ticket management overview
  - Performance metrics
- **Advanced Ticket Management**
  - View all user tickets
  - Update ticket status
  - Assign tickets to staff
  - Add responses and solutions
- **User Management**
  - Add/edit/delete users
  - Manage user permissions and roles
- **System Monitoring**
  - Server status monitoring
  - System performance tracking
- **Statistics and Reporting**
  - Detailed statistics by categories
  - Department-specific reporting
  - Staff performance metrics
  - Yearly statistics and trends
- **Knowledge Base Management**
  - Create and edit articles
  - Manage article categories
  - Publish helpful content for users

## Technologies Used

- **Frontend**
  - HTML5
  - CSS3
  - JavaScript
  - Bootstrap 5
  - Font Awesome
- **UI/UX Design**
  - Responsive design for all device sizes
  - Intuitive user interface
  - Consistent color scheme and styling
- **Components**
  - Dynamic component loading
  - Reusable UI elements
  - Custom styling with extensive CSS

## Installation and Setup

1. **Clone the repository**

   ```
   git clone [repository-url]
   ```

2. **Launch the application**

   - For User Interface:

     - Navigate to `/User It Helpdesk` directory
     - Open `Index.html` in your browser

   - For Admin Interface:
     - Navigate to `/Admin It Helpdesk` directory
     - Open `index.html` in your browser

## Project Structure

### User IT Helpdesk Files

- `Home.html` - Main user dashboard
- `mytickets.html` - User's ticket list and management
- `new-problem.html` - Form for creating new tickets
- `view-detail.html` - Detailed ticket view
- `knowledge-base.html` - Knowledge resources for users
- `components-user.html` - Reusable UI components
- `styles.css` - Styling for user interface

### Admin IT Helpdesk Files

- `Home.html` - Admin dashboard
- `myTicket(s).html` - Ticket management for admins
- `viewDetail.html` - Detailed ticket view for admins
- `newProblemTicket.html` - Create tickets as admin
- `admin-user.html` - User management
- `serverMonitoring.html` - System monitoring tools
- `statistics-*.html` - Various statistical reports
- `knowledgeBase.html` - Manage knowledge base content
- `styles.css` - Styling for admin interface

## Usage

### For Users

1. Navigate to the Home page to see overview and announcements
2. Click "Report a Problem" to create a new ticket
3. Track your tickets in the "My Problem" section
4. View ticket details and status updates
5. Access the Knowledge Base for self-help resources

### For Administrators

1. Log in to the Admin interface
2. View dashboard for system overview
3. Manage tickets from the ticket management section
4. Update ticket status and assign to staff
5. Monitor system performance
6. Generate and view reports
7. Manage users and knowledge base content

## Design Philosophy

The system is built with a focus on:

- **Usability**: Intuitive interfaces for both users and admins
- **Efficiency**: Quick access to important functions
- **Consistency**: Uniform design across all pages
- **Responsiveness**: Works on all device sizes
- **Scalability**: Easily extendable for future features

## Future Enhancements

- Real-time notifications
- Email integration
- Enhanced reporting capabilities
- Advanced analytics
- Mobile application
