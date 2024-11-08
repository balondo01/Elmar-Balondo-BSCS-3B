// Any JavaScript logic you want to add can go here.
// Example: Alert when clicking on a product
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
      alert("You clicked on " + this.closest('.card').querySelector('.card-title').textContent);
    });
  });
  