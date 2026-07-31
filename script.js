

function toggleTask(element) {
      // Toggle the 'completed' class on the clicked task
      element.classList.toggle('completed');

       updateProgress();
      
      // Check if all tasks are completed
      checkAllCompleted();
    }

    function checkAllCompleted() {
      const allTasks = document.querySelectorAll('.task-item');
      const completedTasks = document.querySelectorAll('.task-item.completed');

      // If every task has the completed class, show popup
      if (allTasks.length > 0 && allTasks.length === completedTasks.length) {
        alert('Great job, Agent! All tasks are done!');
      }
    }


function updateProgress() {
      const allTasks = document.querySelectorAll('.task-item');
      const completedTasks = document.querySelectorAll('.task-item.completed');

      const percent = Math.round((completedTasks.length / allTasks.length) * 100);

      document.getElementById("progress-bar").style.width = percent + "%";
      document.getElementById("progress-text").textContent =
        `Progress: ${completedTasks.length}/${allTasks.length} (${percent}%)`;
    }





document.getElementById('fabToggle').addEventListener('click', function() {
  const panel = document.getElementById('menuPanel');
  panel.classList.toggle('show');
  
  // Optional: Rotate the plus icon to a close icon
  const fab = this;
  if (panel.classList.contains('show')) {
    fab.style.transform = 'scale(1.05) rotate(45deg)';
  } else {
    fab.style.transform = 'scale(1.05) rotate(0deg)';
  }
});

// Close panel when clicking outside
document.addEventListener('click', function(event) {
  const container = document.querySelector('.agent-menu-container');
  const panel = document.getElementById('menuPanel');
  const fab = document.getElementById('fabToggle');
  
  if (!container.contains(event.target)) {
    panel.classList.remove('show');
    fab.style.transform = 'rotate(0deg)';
  }
});





// Personalization Action Example
function setTheme(mode) {
  const buttons = document.querySelectorAll('.theme-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  if (mode === 'dark') {
    document.body.style.backgroundColor = '#111827';
    document.body.style.color = '#f9fafb';
    event.target.classList.add('active');
  } else {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#111827';
    event.target.classList.add('active');
  }
}



function applyPersonalization() {
        // Get input values
        const name = document.getElementById("agentName").value;
        const role = document.getElementById("agentRole").value;

        // Ensure name isn't empty
        if (name.trim() === "") {
            alert("Please enter a name.");
            return;
        }

        // Insert name and role into the HTML
        document.getElementById("outName").textContent = name;
        document.getElementById("outRole").textContent = role;

        // Show the display area
        document.getElementById("displayArea").style.display = "block";
    }


const checkboxes = document.querySelectorAll("input[type='checkbox']");

// Load saved checkbox states
checkboxes.forEach(checkbox => {
    checkbox.checked = localStorage.getItem(checkbox.id) === "checked";

    // Save changes
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            localStorage.setItem(this.id, "checked");
        } else {
            localStorage.removeItem(this.id);
        }
    });
});
