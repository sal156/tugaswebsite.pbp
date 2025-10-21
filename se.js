// =======================================================
// 1 Navbar Menu Handling
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach(item => {
    item.addEventListener("click", function () {
      menuItems.forEach(i => i.classList.remove("active-menu"));
      // Tambahkan status aktif pada menu yang diklik
      this.classList.add("active-menu");
    });
  });
});


// diskon index
document.addEventListener("DOMContentLoaded", () => {
  const categoryTabs = document.querySelectorAll("#categoryTabs button");
  const products = document.querySelectorAll("#productGrid .product-card");
  const searchInput = document.getElementById("searchInput");

  let selectedCategory = "burgers"; 

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

  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      selectedCategory = tab.getAttribute("data-category");
      filterProducts();
    });
  });

  // men input mnu
  searchInput.addEventListener("input", () => {
    filterProducts();
  });
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





