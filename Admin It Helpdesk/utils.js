// Function to load HTML components
async function loadComponent(elementId, componentPath, componentId) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) {
      throw new Error(`Failed to load component: ${response.status}`);
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const component = doc.getElementById(componentId);

    if (component) {
      document.getElementById(elementId).innerHTML = component.innerHTML;
    } else {
      console.error(
        `Component with ID '${componentId}' not found in ${componentPath}`
      );
    }
  } catch (error) {
    console.error("Error loading component:", error);
  }
}

// Load header and sidebar components
async function loadLayoutComponents() {
  await loadComponent(
    "header-container",
    "components.html",
    "header-component"
  );
  await loadComponent(
    "sidebar-container",
    "components.html",
    "sidebar-component"
  );

  // Load copyright component if container exists
  if (document.getElementById("copyright-container")) {
    await loadComponent(
      "copyright-container",
      "components.html",
      "copyright-component"
    );
  }

  // After loading components, set active navigation based on current page
  setActiveNavigation();
}

// Document ready function
function ready(callback) {
  if (document.readyState !== "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
}

// Initialize the layout when the document is ready
ready(function () {
  if (
    document.getElementById("header-container") &&
    document.getElementById("sidebar-container")
  ) {
    loadLayoutComponents();
  }
});

// Set active navigation based on current page
function setActiveNavigation() {
  const currentPage = window.location.pathname.split("/").pop();

  // Find all nav links in sidebar
  const navLinks = document.querySelectorAll("#sidebar-container .nav-link");
  const submenuLinks = document.querySelectorAll(
    "#sidebar-container .submenu-sidebar a"
  );

  // Reset all active classes
  navLinks.forEach((link) => link.classList.remove("active"));
  submenuLinks.forEach((link) => link.classList.remove("active"));

  // Set active based on current page
  if (
    currentPage === "Home.html" ||
    currentPage === "" ||
    currentPage === "/"
  ) {
    const homeLink = document.querySelector(
      '#sidebar-container a[href="Home.html"]'
    );
    if (homeLink) homeLink.classList.add("active");
  } else {
    // Find link that matches current page
    const activeLink = document.querySelector(
      `#sidebar-container a[href="${currentPage}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");

      // If it's in a submenu, show the submenu and set parent as active
      const submenu = activeLink.closest(".submenu-sidebar");
      if (submenu) {
        submenu.style.display = "block";
        const parentLink = submenu.previousElementSibling;
        if (parentLink) parentLink.classList.add("active");
      }
    }
  }
}

// Toggle a submenu (exported for use in pages)
function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  if (submenu) {
    const isVisible = submenu.style.display === "block";
    submenu.style.display = isVisible ? "none" : "block";

    // Toggle arrow rotation
    const parentLink = submenu.previousElementSibling;
    if (parentLink) {
      const arrow = parentLink.querySelector(".fa-angle-down");
      if (arrow) {
        arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
      }
    }
  }
}

// Filter function for tickets
function filterTickets(filterValue) {
  const ticketItems = document.querySelectorAll(".ticket-item");

  ticketItems.forEach((item) => {
    const status = item.getAttribute("data-status");

    if (filterValue === "all" || status === filterValue) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Search function for tickets
function searchTickets(searchTerm) {
  const ticketItems = document.querySelectorAll(".ticket-item");
  searchTerm = searchTerm.toLowerCase();

  ticketItems.forEach((item) => {
    const title = item
      .querySelector(".ticket-title h4")
      .textContent.toLowerCase();
    const id = item.querySelector(".ticket-id").textContent.toLowerCase();
    const content = item
      .querySelector(".ticket-content")
      .textContent.toLowerCase();

    if (
      title.includes(searchTerm) ||
      id.includes(searchTerm) ||
      content.includes(searchTerm)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Toggle filter modal
function toggleFilterModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modal) {
    if (modal.classList.contains("active")) {
      modal.classList.remove("active");
    } else {
      modal.classList.add("active");
    }
  }
}

// Initialize common event listeners
function initializeEventListeners() {
  // Filter button click event
  const filterBtn = document.getElementById("filter-btn");
  if (filterBtn) {
    filterBtn.addEventListener("click", () =>
      toggleFilterModal("filter-modal")
    );
  }

  // Admin filter button
  const filterBtnAdmin = document.getElementById("filter-btn-admin");
  if (filterBtnAdmin) {
    filterBtnAdmin.addEventListener("click", () =>
      toggleFilterModal("filter-modal-admin")
    );
  }

  // Dropdown toggles
  const dropdownToggles = document.querySelectorAll(
    ".nav-link.dropdown-toggle"
  );
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();

      // Toggle the submenu
      const submenu = this.nextElementSibling;
      if (submenu) {
        toggleSubmenu(submenu.id);
      }
    });
  });

  // Search input event
  const searchInput = document.querySelector(".search-bar input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => searchTickets(e.target.value));
  }

  // Filter options click events
  const filterOptions = document.querySelectorAll(".filter-option");
  filterOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const filterValue = option.textContent.toLowerCase().replace(/\s+/g, "-");
      filterTickets(filterValue === "show-all" ? "all" : filterValue);

      // Toggle active class
      filterOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");

      // Close the modal
      const modal = option.closest(".filter-modal");
      if (modal) {
        modal.classList.remove("active");
      }
    });
  });
}

// Call this function after DOM is loaded and components are loaded
ready(function () {
  // First load components
  if (
    document.getElementById("header-container") &&
    document.getElementById("sidebar-container")
  ) {
    loadLayoutComponents().then(() => {
      // Then initialize event listeners
      initializeEventListeners();
    });
  }
});
