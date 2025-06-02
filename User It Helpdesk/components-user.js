/**
 * IT-HelpDesk Components System
 * This file contains all reusable UI components for the User IT-HelpDesk application
 */

// Components registry
const COMPONENTS = {
  // Navbar Component
  "navbar-component": `
    <header class="modern-navbar">
      <div class="logo">
        <a href="Home.html">
          <img
            src="https://www.trans7.co.id/assets/front/images/logo/logo-trans7.png"
            alt="Trans7 IT-HelpDesk"
            style="height: 40px; width: auto"
          />
        </a>
      </div>
      <div class="nav-menu">
        <a href="Home.html" id="nav-home">HOME</a>
        <a href="mytickets.html" id="nav-tickets">MY PROBLEM</a>
        <a href="new-problem.html" id="nav-new-problem">NEW PROBLEM</a>
        <a href="knowledge-base.html" id="nav-knowledge">KNOWLEDGE BASE</a>
      </div>
      <div class="user-info">
        <span class="user-name">JOHN DOE</span>
        <button class="logout-btn">
          <i class="fas fa-sign-out-alt me-1"></i>Logout
        </button>
      </div>
    </header>
  `,

  // WhatsApp Button Component
  "whatsapp-component": `
    <a href="#" class="whatsapp-button" aria-label="Contact support via WhatsApp">
      <i class="fab fa-whatsapp fa-2x text-white"></i>
      <span class="tooltip">Need help? Contact us!</span>
    </a>
  `,

  // Footer Component
  "footer-component": `
    <footer class="footer mt-5">
      <div class="container py-3">
        <div class="text-center">
          <p>© 2025 Trans 7. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
};

/**
 * Function to include a component into a container
 * @param {string} componentName - Name of the component to include
 * @param {string} containerId - ID of the container element
 */
function includeComponent(componentName, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID '${containerId}' not found.`);
    return;
  }

  const componentHTML = COMPONENTS[componentName];
  if (!componentHTML) {
    console.error(`Component '${componentName}' not defined.`);
    return;
  }

  container.innerHTML = componentHTML;
}

/**
 * Set active navigation link based on current page
 */
function setActiveNavigation() {
  const currentPage = window.location.pathname.split("/").pop();

  // Reset all active classes
  document.querySelectorAll(".nav-menu a").forEach((item) => {
    item.classList.remove("active");
  });

  // Set active link based on current page
  switch (currentPage) {
    case "":
    case "index.html":
    case "Index.html":
    case "Home.html":
      document.querySelector("#nav-home")?.classList.add("active");
      break;
    case "mytickets.html":
      document.querySelector("#nav-tickets")?.classList.add("active");
      break;
    case "new-problem.html":
      document.querySelector("#nav-new-problem")?.classList.add("active");
      break;
    case "knowledge-base.html":
      document.querySelector("#nav-knowledge")?.classList.add("active");
      break;
  }
}

// Initialize components when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Load all components
  if (document.getElementById("navbar-container")) {
    includeComponent("navbar-component", "navbar-container");
  }

  if (document.getElementById("whatsapp-container")) {
    includeComponent("whatsapp-component", "whatsapp-container");
  }

  if (document.getElementById("footer-container")) {
    includeComponent("footer-component", "footer-container");
  }

  // Set active navigation
  setActiveNavigation();

  // Initialize WhatsApp button functionality
  const whatsappButton = document.querySelector(".whatsapp-button");
  if (whatsappButton) {
    whatsappButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.open("https://wa.me/6281234567890", "_blank");
    });
  }
});

// Export functions for use in other scripts
window.ITHelpdesk = {
  includeComponent,
  setActiveNavigation,
};
