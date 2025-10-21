// =======================================================
// 1 Navbar Menu Handling
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
    item.addEventListener("click", function () {
      // Hapus status aktif dari semua menu
      menuItems.forEach(i => i.classList.remove("active-menu"));
      // Tambahkan status aktif pada menu yang diklik
      this.classList.add("active-menu");
      // Tidak ada preventDefault — biarkan link berjalan normal
    });
  });
});

// diskon
document.addEventListener("DOMContentLoaded", () => {
  const categoryTabs = document.querySelectorAll("#categoryTabs button");
  const products = document.querySelectorAll("#productGrid .product-card");
  const searchInput = document.getElementById("searchInput");

  let selectedCategory = "burgers"; // default active category

  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    products.forEach(product => {
      const matchesCategory = product.classList.contains(selectedCategory);
      const title = product.querySelector(".card-title").textContent.toLowerCase();
      const description = product.querySelector(".description-text").textContent.toLowerCase();
      const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  }

  // Tab click event
  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove("active"));
      // Add active class to clicked tab
      tab.classList.add("active");

      selectedCategory = tab.getAttribute("data-category");
      filterProducts();
    });
  });

  // Search input event
  searchInput.addEventListener("input", () => {
    filterProducts();
  });

  // Initial filter on page load
  filterProducts();
});












// =======================================================
// 2 Filter Produk Berdasarkan Tab dan Pencarian
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('#categoryTabs button');
  const products = document.querySelectorAll('#productGrid .product-card');
  const searchInput = document.getElementById('searchInput');

  function filterProducts(category, searchTerm = '') {
    products.forEach(product => {
      const matchesCategory = product.classList.contains(category);
      const matchesSearch = product.querySelector('.card-title')
        .textContent.toLowerCase()
        .includes(searchTerm.toLowerCase());
      product.style.display = matchesCategory && matchesSearch ? 'block' : 'none';
    });
  }

  // Klik tab kategori
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      filterProducts(category, searchInput.value.trim());
    });
  });

  // Filter saat mengetik di kolom pencarian
  searchInput.addEventListener('input', () => {
    const activeTab = document.querySelector('#categoryTabs .active');
    const category = activeTab ? activeTab.getAttribute('data-category') : 'burgers';
    filterProducts(category, searchInput.value.trim());
  });

  // Tampilkan kategori pertama (burger) saat awal
  filterProducts('burgers');
});









//=======================================
//   5. Review pelnaggan
//=======================================
const wrapper = document.querySelector('.reviews-wrapper');
const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');

// Geser ke kanan
next.addEventListener('click', () => {
  wrapper.scrollBy({ left: 320, behavior: 'smooth' });
});

// Geser ke kiri
prev.addEventListener('click', () => {
  wrapper.scrollBy({ left: -320, behavior: 'smooth' });
});
