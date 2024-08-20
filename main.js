$(document).ready(function() {
    function updateContainerClass() {
      if ($(window).width() < 1200) {
        $('#promo.container').removeClass('container');
        $('#carouselExampleIndicators.container-md').removeClass('container-md');
        $('#carousel-dalam.rounded-4').removeClass('rounded-4');
        $('.promo').addClass('container-fluid');
        $('.brand.container').removeClass('container');
        $('.brand').addClass('container-fluid');
      } else {
        $('#carousel-dalam').addClass('rounded-4');
        $('#carouselExampleIndicators').addClass('container-md');
        $('.promo.container-fluid').removeClass('container-fluid')
        $("#promo").addClass('container');
        $('.brand.container-fluid').removeClass('container-fluid');
        $('.brand').addClass('container');
      }
      if ($(window).width() < 400) {
        $('#pf.container-fluid').removeClass('container-fluid');
        $('#footer.rounded-top-5').removeClass('rounded-top-5');
      } else {
        $('#pf').addClass('container-fluid');
        $('#footer').addClass('rounded-top-5');
      }
    }
    
    updateContainerClass();
    $(window).resize(function() {
      updateContainerClass();
    });




   
      // Data produk 
      let products = [
        {id: 1, gambarProduk: "asset/img/download (1).jpeg", namaProduk: 'Gulaku', kategori: 'Bumbu', harga: 20000, stok: 200, terjual: 500, rating: 4.2},
        {id: 2, gambarProduk: "asset/img/download (2).jpeg", namaProduk: 'Sabun Sunlight', kategori: 'Item Harian', harga: 15989, stok: 143, terjual: 30, rating: 3.1},
        {id: 3, gambarProduk: "asset/img/download (3).jpeg", namaProduk: 'Odol Pepsodent', kategori: 'Item Harian', harga: 10000, stok: 41, terjual: 20, rating: 5.5},
        {id: 4, gambarProduk: "asset/img/download (4).jpeg", namaProduk: 'Susu Kental Manis', kategori: 'Minuman', harga: 15000, stok: 56, terjual: 23, rating: 1.7},
        {id: 5, gambarProduk: "asset/img/download (5).jpeg", namaProduk: 'Pocari Sweat', kategori: 'Minuman', harga: 2500, stok: 88, terjual: 56, rating: 6.8},
        {id: 6, gambarProduk: "asset/img/Olatte drink Pin pink ver.jpeg", namaProduk: 'Olatte', kategori: 'Minuman', harga: 20500, stok: 280, terjual: 77, rating: 2.1},
        {id: 7, gambarProduk: "asset/img/download (6).jpeg", namaProduk: 'Chitao', kategori: 'Jajanan', harga: 7000, stok: 10, terjual: 500, rating: 3.2},
        {id: 8, gambarProduk: "asset/img/Kimomart _ Sarden ABC.jpeg", namaProduk: 'Sarden ABC', kategori: 'Bumbu', harga: 18000, stok: 33, terjual: 521, rating: 4.0},
        {id: 9, gambarProduk: "asset/img/Snickers Classic.jpeg", namaProduk: 'Snicker', kategori: 'Jajanan', harga: 12000, stok: 60, terjual: 43, rating: 4.8},
        {id: 10, gambarProduk: "asset/img/Sabonete em Barra Puro Vegetal Ekos individual.jpeg", namaProduk: 'Bayam Segar', kategori: 'Sayuran', harga: 5000, stok: 200, terjual: 47, rating: 4.2},
        {id: 11, gambarProduk: "asset/img/download (3).jpeg", namaProduk: 'Apel Merah', kategori: 'Buah', harga: 15000, stok: 75, terjual: 80, rating: 4.5},
        {id: 12, gambarProduk: "asset/img/download (4).jpeg", namaProduk: 'Coklat Silverqueen', kategori: 'Jajanan', harga: 22000, stok: 30, terjual: 10, rating: 4.9},
        {id: 13, gambarProduk: "asset/img/download (5).jpeg", namaProduk: 'Wortel', kategori: 'Sayuran', harga: 3000, stok: 120, terjual: 500, rating: 4.0},
        {id: 14, gambarProduk: "asset/img/Olatte drink Pin pink ver.jpeg", namaProduk: 'Pisang', kategori: 'Buah', harga: 18000, stok: 90, terjual: 53, rating: 4.6},
        {id: 15, gambarProduk: "asset/img/Kimomart _ Sarden ABC.jpeg", namaProduk: 'Tomat', kategori: 'Sayuran', harga: 4000, stok: 110, terjual: 11, rating: 4.1},
        {id: 16, gambarProduk: "asset/img/download (1).jpeg", namaProduk: 'Jeruk', kategori: 'Buah', harga: 12000, stok: 80, terjual: 76, rating: 4.7},
    ];

      

let kategoriTerpilih = '';
let minPrice = 1;
let maxPrice = 10000000;
let maxStok = 10000000;
let ratingOrder = '';

  function tampilkanProduct(produkTerfilter, containerId) {
    let productContainer = $(containerId);
    productContainer.empty();

    if (produkTerfilter.length === 0) {
      productContainer.html(`
          <div class="tidakDitemukan text-center p-5 text-danger w-100">
              <h1 class="fw-bold">Maaf, Produk Tidak Tersedia / Tidak Ditemukan. Silahkan Cari Yang Lain....</h1>
          </div>
      `);
  } else {
      produkTerfilter.forEach(function (product) {
          let productHTML = `
              <a href="detailProduct.html" class="text-decoration-none col card-produk" data-kategori="${product.kategori}" data-harga="${product.harga}" data-stok="${product.stok}" data-nama="${product.namaProduk}">
                  <div class="card mx-auto">
                      <img loading="lazy" src="${product.gambarProduk}" class="card-img-top" alt="...">
                      <div class="card-body text-nowrap">
                          <span class="card-title fs-5">${product.namaProduk}</span><br>
                          <span class="border border-success text-success px-2">${product.kategori}</span>
                          <div class="d-flex align-items-center column-gap-1 text-nowrap">
                              <h5 class="card-text fw-bold my-1">Rp ${product.harga.toLocaleString('id-ID')}</h5>
                              <span class="text-secondary stok">Stok: ${product.stok}</span>
                          </div>
                          <div class="d-flex align-items-center"><i class="bi bi-geo-alt-fill text-success me-1"></i><span>Madura</span></div>
                          <div class="rating d-flex align-items-center">
                              <div class="d-flex align-items-center">
                                  <i class="bi bi-star-fill me-2 text-warning"></i>
                                  <span>${product.rating}</span>
                              </div>
                              <div class="vr mx-1 mx-md-2"></div>
                              <span class="ulasan">${product.terjual} (Terjual)</span>
                          </div>
                      </div>
                  </div>
              </a>
          `;
          productContainer.append(productHTML);
      });
  }
}
tampilkanProduct(products, '#displayProduk');

function filterProducts() {
  let produkTerfilter = products.filter(function (product) {
    return (kategoriTerpilih === '' || product.kategori.toLowerCase() === kategoriTerpilih) &&
           (product.harga >= minPrice && product.harga <= maxPrice) &&
           (product.stok <= maxStok);
  });
  if (ratingOrder === 'highest') {
    produkTerfilter.sort((a, b) => b.rating - a.rating); 
  } else if (ratingOrder === 'lowest') {
    produkTerfilter.sort((a, b) => a.rating - b.rating); 
  }
  tampilkanProduct(produkTerfilter, '#displayProduk'); 
}

$('#cariProduk').on('keyup', function () {
  let query = $(this).val().toLowerCase(); 
  kategoriTerpilih = kategoriTerpilih; 
  minPrice = $('#minHarga').val() || 1; 
  maxPrice = $('#maxHarga').val() || 10000000; 
  maxStok = $('#rangeStok').val() || 10000000;
  let produkTerfilter = products.filter(function (product) {
    return product.namaProduk.toLowerCase().includes(query);
  });
  produkTerfilter = produkTerfilter.filter(function (product) {
    return (kategoriTerpilih === '' || product.kategori.toLowerCase() === kategoriTerpilih) &&
           (product.harga >= minPrice && product.harga <= maxPrice) &&
           (product.stok <= maxStok);
  });
  tampilkanProduct(produkTerfilter, '#displayProduk'); 
});


$(".isi-kategori .col").on("click", function() {
  $(".kotak-kategori").removeClass("terpilih");
  $(this).find(".kotak-kategori").addClass("terpilih");
  let spanText = $(this).find("span").text();
  if (spanText) {
    kategoriTerpilih = spanText.trim().toLowerCase();
  } else {
    kategoriTerpilih = ''; 
  }
  filterProducts(); 
});

$('#minHarga, #maxHarga').on('input', function () {
  minPrice = parseInt($('#minHarga').val()) || 1; 
  maxPrice = parseInt($('#maxHarga').val()) || 10000000; 
  filterProducts(); 
});

$('#rangeStok').on('input', function () {
  maxStok = parseInt($(this).val());
  $('#stokTerpilih').text(maxStok);
  filterProducts(); 
});

$('#ratingOrder').on('change', function () {
  ratingOrder = $(this).val(); 
  filterProducts(); 
});

$('#resetFilter').on('click', function() {
  tampilkanProduct(products, '#displayProduk');
   console.log("jao")
  $(".kotak-kategori").removeClass("terpilih");

 
  $('#cariProduk').val('');
  $('#minHarga').val('');
  $('#maxHarga').val('');
  $('#rangeStok').val('');
  $('#stokTerpilih').text('');
  $('#ratingOrder').val('');

  kategoriTerpilih = '';
  minPrice = 1;
  maxPrice = 10000000;
  maxStok = 10000000;
  ratingOrder = '';
});
function renderTopSellingProducts() {
  let topSellingProducts = products.slice().sort((a, b) => b.terjual - a.terjual).slice(0, 12);
  console.log('Top Selling Products:', topSellingProducts); 
  tampilkanProduct(topSellingProducts, '#produkTerlaris');
}
  renderTopSellingProducts();

$(".img-kecil").on('click', function(e) {
  if ($(this).hasClass('img-kecil')) {
    $(".img-utama").attr('src', $(this).attr('src'));
  }
});



})