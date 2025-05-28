const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.querySelector('.modal-price');
const modalOrder = document.getElementById('modal-order');
const closeBtn = document.querySelector('.close-btn');
const phone = "213XXXXXXXXX"; // عدله برقمك

// فتح المودال
function openModal(product) {
  const name = product.getAttribute('data-name');
  const price = product.getAttribute('data-price');
  const desc = product.getAttribute('data-desc');
  const img = product.getAttribute('data-img');

  modalName.textContent = name;
  modalDesc.textContent = desc;
  modalPrice.textContent = price;
  modalImg.src = img;
  modalImg.alt = name;

  modalOrder.href = `https://wa.me/${phone}?text=السلام عليكم، أريد طلب ${encodeURIComponent(name)} من The Qamis.`;
  modal.classList.remove('hidden');
}

// ربط الأزرار
document.querySelectorAll('.btn-details').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    openModal(productCard);
  });
});

// غلق المودال
closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.classList.add('hidden');
});
