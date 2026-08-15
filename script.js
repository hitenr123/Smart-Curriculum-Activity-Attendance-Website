// ================= DATE =================

const dateElement = document.getElementById("currentDate");

const today = new Date();

const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

dateElement.textContent =
    today.toLocaleDateString("en-GB", options);


// ================= SIDEBAR =================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("open");

});


// ================= NAVIGATION =================

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", function (event) {

        event.preventDefault();

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

        const page = this.dataset.page;

        showPage(page);

    });

});


// ================= PAGE FUNCTION =================

function showPage(page) {

    const content = document.getElementById("content");

    if (page === "dashboard") {

        location.reload();

        return;
    }


    if (page === "attendance") {

        content.innerHTML = `
        
            <div class="page-heading">
                <div>
                    <h1>Attendance</h1>
                    <p>View your complete attendance record.</p>
                </div>
            </div>

            <div class="stats">

                <div class="stat-card attendance-card">
                    <div class="stat-icon">
                        <i class="fa-solid fa-chart-pie"></i>
                    </div>

                    <p>Overall Attendance</p>
                    <h2>82%</h2>
                    <span>Good Attendance</span>
                </div>

                <div class="stat-card curriculum-card">
                    <p>Total Classes</p>
                    <h2>200</h2>
                    <span>Conducted</span>
                </div>

                <div class="stat-card activity-card">
                    <p>Present</p>
                    <h2>164</h2>
                    <span>Classes attended</span>
                </div>

                <div class="stat-card deadline-card">
                    <p>Absent</p>
                    <h2>32</h2>
                    <span>Classes missed</span>
                </div>

            </div>

            <div class="panel">

                <div class="panel-title">
                    <h2>Subject-wise Attendance</h2>
                </div>

                <div class="subject">
                    <div class="subject-info">
                        <span>Java Programming</span>
                        <b>88%</b>
                    </div>

                    <div class="progress">
                        <div style="width:88%"></div>
                    </div>
                </div>

                <div class="subject">
                    <div class="subject-info">
                        <span>Data Structures</span>
                        <b>76%</b>
                    </div>

                    <div class="progress">
                        <div style="width:76%"></div>
                    </div>
                </div>

                <div class="subject">
                    <div class="subject-info">
                        <span>Database Management</span>
                        <b class="warning-text">68%</b>
                    </div>

                    <div class="progress warning">
                        <div style="width:68%"></div>
                    </div>
                </div>

                <div class="subject">
                    <div class="subject-info">
                        <span>Discrete Mathematics</span>
                        <b>85%</b>
                    </div>

                    <div class="progress">
                        <div style="width:85%"></div>
                    </div>
                </div>

            </div>
        `;

    }


    else if (page === "curriculum") {

        content.innerHTML = `

            <div class="page-heading">
                <div>
                    <h1>Curriculum</h1>
                    <p>Track your syllabus progress.</p>
                </div>
            </div>

            <div class="panel">

                <div class="panel-title">
                    <h2>Java Programming</h2>
                </div>

                <div class="subject">

                    <div class="subject-info">
                        <span>Overall Progress</span>
                        <b>65%</b>
                    </div>

                    <div class="progress">
                        <div style="width:65%"></div>
                    </div>

                </div>

                <br>

                <h3>Units</h3>

                <br>

                <p>✓ Unit 1 - Object Oriented Programming</p>
                <p>✓ Unit 2 - Collections Framework</p>
                <p>→ Unit 3 - Exception Handling</p>
                <p>○ Unit 4 - Multithreading</p>
                <p>○ Unit 5 - JDBC</p>

            </div>
        `;

    }


    else if (page === "activities") {

        content.innerHTML = `

            <div class="page-heading">

                <div>
                    <h1>Activities</h1>
                    <p>Your assignments and projects.</p>
                </div>

            </div>

            <div class="panel">

                <div class="panel-title">
                    <h2>Pending Activities</h2>
                </div>

                <div class="activity-row">

                    <div>
                        <b>Java Assignment - OOP Concepts</b>
                    </div>

                    <span>18 Aug 2026</span>

                    <label class="priority high">
                        High
                    </label>

                </div>

                <div class="activity-row">

                    <div>
                        <b>DBMS Mini Project</b>
                    </div>

                    <span>20 Aug 2026</span>

                    <label class="priority medium">
                        Medium
                    </label>

                </div>

                <div class="activity-row">

                    <div>
                        <b>Data Structures Quiz</b>
                    </div>

                    <span>22 Aug 2026</span>

                    <label class="priority low">
                        Low
                    </label>

                </div>

            </div>
        `;

    }


    else if (page === "timetable") {

        content.innerHTML = `

            <div class="page-heading">

                <div>
                    <h1>Timetable</h1>
                    <p>Your class schedule.</p>
                </div>

            </div>

            <div class="panel">

                <div class="panel-title">
                    <h2>Today's Schedule</h2>
                </div>

                <div class="class-row">
                    <strong>10:00 AM</strong>
                    <div>
                        <b>Java Programming</b>
                        <small>Room 301</small>
                    </div>
                    <span class="status on-time">On Time</span>
                </div>

                <div class="class-row">
                    <strong>11:00 AM</strong>
                    <div>
                        <b>Data Structures</b>
                        <small>Room 302</small>
                    </div>
                    <span class="status on-time">On Time</span>
                </div>

                <div class="class-row">
                    <strong>01:00 PM</strong>
                    <div>
                        <b>Database Management</b>
                        <small>Room 201</small>
                    </div>
                    <span class="status upcoming">Upcoming</span>
                </div>

                <div class="class-row">
                    <strong>02:00 PM</strong>
                    <div>
                        <b>Discrete Mathematics</b>
                        <small>Room 203</small>
                    </div>
                    <span class="status upcoming">Upcoming</span>
                </div>

            </div>
        `;

    }


    else if (page === "notifications") {

        content.innerHTML = `

            <div class="page-heading">

                <div>
                    <h1>Notifications 🔔</h1>
                    <p>Stay updated with your college activities.</p>
                </div>

            </div>

            <div class="panel">

                <div class="notification-row">
                    <span>
                        Attendance Alert: Your DBMS attendance is below 75%.
                    </span>
                    <small>2 hours ago</small>
                </div>

                <div class="notification-row">
                    <span>
                        New activity posted in Java Programming.
                    </span>
                    <small>5 hours ago</small>
                </div>

                <div class="notification-row">
                    <span>
                        Discrete Mathematics class rescheduled.
                    </span>
                    <small>1 day ago</small>
                </div>

            </div>
        `;

    }


    else if (page === "profile") {

        content.innerHTML = `

            <div class="page-heading">

                <div>
                    <h1>My Profile</h1>
                    <p>Your personal information.</p>
                </div>

            </div>

            <div class="panel">

                <h2>Naveen Kumar</h2>

                <br>

                <p><b>Role:</b> Student</p>

                <br>

                <p><b>Course:</b> B.Tech Computer Science</p>

                <br>

                <p><b>Semester:</b> 3rd Semester</p>

                <br>

                <p><b>Section:</b> A</p>

                <br>

                <p><b>Roll Number:</b> 2026CSE001</p>

            </div>

        `;

    }


    else if (page === "settings") {

        content.innerHTML = `

            <div class="page-heading">

                <div>
                    <h1>Settings</h1>
                    <p>Manage your preferences.</p>
                </div>

            </div>

            <div class="panel">

                <h3>Account Settings</h3>

                <br>

                <label>
                    <input type="checkbox" checked>
                    Email Notifications
                </label>

                <br><br>

                <label>
                    <input type="checkbox" checked>
                    Attendance Alerts
                </label>

                <br><br>

                <label>
                    <input type="checkbox">
                    Activity Reminders
                </label>

            </div>

        `;

    }

}