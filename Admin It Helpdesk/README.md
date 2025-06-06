# Admin IT Helpdesk

The administrative interface of the IT Helpdesk system, designed for IT staff and administrators to manage tickets, users, knowledge base content, and monitor system performance.

## Features

- **Administrative Dashboard**

  - Comprehensive overview of system metrics and performance
  - Quick access to all administrative functions
  - Real-time statistics on ticket status, categories, and assignments
  - Summary cards for critical metrics
  - Recent activity logs

- **Advanced Ticket Management**

  - View all user tickets across the organization
  - Update ticket status (Open, On Progress, Solved, Expired)
  - Assign tickets to specific IT staff members
  - Add detailed responses and troubleshooting steps
  - Categorize and prioritize tickets
  - Track resolution time and staff performance

- **User Administration**

  - Manage user accounts and access permissions
  - Add new users and define roles
  - View user activity and ticket history
  - Reset passwords and manage account settings
  - Department and team organization

- **Knowledge Base Management**

  - Create and publish helpful articles and guides
  - Organize content into categories
  - Add, edit, and remove knowledge base entries
  - Manage article visibility and relevance

- **System Monitoring Tools**

  - Server status and performance tracking
  - System resource utilization statistics
  - Security monitoring and alerts
  - Database performance and capacity metrics

- **Comprehensive Statistics**
  - Detailed reports by ticket category
  - Department-specific performance metrics
  - Staff efficiency and resolution metrics
  - Yearly trends and analysis
  - Customizable report generation

## File Structure

- `Home.html` - Admin dashboard with system overview
- `myTicket(s).html` - Comprehensive ticket management
- `viewDetail.html` - Detailed ticket view with admin controls
- `newProblemTicket.html` - Create tickets as admin
- `admin-user.html` - User management interface
- `serverMonitoring.html` - System monitoring dashboard
- `knowledgeBase.html` - Knowledge base content management
- `addKnowledgeBase.html` - Interface for adding new articles
- `admin-article.html` - Article management
- `admin-category-article.html` - Article category management
- `admin-category-ticket.html` - Ticket category management

### Statistics Modules

- `Statistic.html` - Main statistics overview
- `all-statistics.html` - Comprehensive statistics dashboard
- `statistics-categories.html` - Statistics by ticket category
- `statistics-departments.html` - Department-specific statistics
- `statistics-staff.html` - IT staff performance metrics
- `statistics-year.html` - Yearly statistics and trends

### Support Files

- `styles.css` - Admin interface styling
- `utils.js` - Utility JavaScript functions
- `components.html` - Reusable UI components
- `/css` - Additional CSS resources

## Administrative Capabilities

### Ticket Administration

- View tickets from all users across the organization
- Filter tickets by status, department, priority, or date
- Assign tickets to specific IT staff members
- Add internal notes visible only to IT staff
- Implement standardized resolutions for common problems
- Track SLAs (Service Level Agreements) for response and resolution

### Knowledge Base Administration

- Create structured knowledge for common issues
- Develop self-service resources to reduce ticket volume
- Categorize content for easy discovery
- Manage article visibility (internal/external)

### Performance Monitoring

- Track IT staff performance metrics
- Analyze resolution time by ticket type
- Monitor department-specific ticket volume
- Identify recurring issues for proactive resolution
- Generate reports for management

## Usage Instructions

1. Access the admin dashboard via `index.html`
2. Use the navigation menu to access different administrative functions
3. Manage incoming tickets via the ticket management interface
4. Generate reports and analyze system performance
5. Add and maintain knowledge base content
6. Monitor system health and performance

## Langkah-langkah Membuat Problem Ticket

1. **Masuk ke Halaman Home**

   - Setelah login, Anda akan berada di halaman Home IT Helpdesk.
   - Di halaman ini, Anda dapat melihat daftar tiket yang sudah pernah dibuat dan statusnya.

2. **Akses Menu My Ticket(s)**

   - Klik menu **My Ticket(s)** di sidebar kiri untuk melihat daftar tiket Anda.
   - Di halaman ini, terdapat tombol **Make a New Ticket**.

3. **Klik Tombol "Make a New Ticket"**

   - Tekan tombol **Make a New Ticket** untuk mulai membuat tiket baru.

4. **Isi Formulir New Problem Ticket**

   - Anda akan diarahkan ke halaman **New Problem Ticket**.
   - Isi semua field yang diperlukan, seperti:
     - Judul/Subject masalah
     - Deskripsi masalah secara detail
     - Pilih kategori masalah
     - Pilih prioritas (jika ada)
     - Pilih departemen (jika ada)
     - Tambahkan lampiran jika diperlukan

5. **Submit Ticket**

   - Setelah semua data terisi, klik tombol **Submit Ticket** di bagian bawah form.

6. **Notifikasi & Konfirmasi**
   - Setelah tiket berhasil dibuat, Anda akan kembali ke halaman Home.
   - Notifikasi bahwa tiket berhasil dibuat akan muncul di halaman Home.
   - Tiket baru Anda akan muncul di daftar tiket dengan status terbaru.

This administrative interface provides powerful tools for IT managers and staff to efficiently handle support requests, maintain system documentation, and ensure optimal IT service delivery throughout the organization.
